const Settings = require('../../Schemas/Settings');
const localization = require('../../Utils/localization');

module.exports = {
  name: 'config',
  run: async (interaction) => {
    const settings = await Settings.findOne({
      _id: interaction.guild.id,
    });

    const locale = settings?.locale || 'en';

    if (
      !(
        interaction.member.permissions.has('ADMINISTRATOR') ||
        interaction.member.permissions.has('MANAGE_GUILD')
      )
    )
      return interaction.reply({
        content:
          localization.missingPermissions[locale] +
          localization.permissions.manageGuild[locale],
        ephemeral: true,
      });

    const channel = interaction.options.getChannel('channel'),
      language = interaction.options.getString('language');

    if (channel) {
      if (
        !(
          channel
            .permissionsFor(interaction.client.user.id)
            .has('SEND_MESSAGES') &&
          channel.permissionsFor(interaction.client.user.id).has('VIEW_CHANNEL')
        )
      ) {
        interaction.reply({
          content: localization.errors.cannotSendMessages[locale],
          ephemeral: true,
        });
      } else {
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { rolePlayChannelID: channel.id },
          { upsert: true }
        );

        await interaction.reply({
          content: `${localization.channelChanged[locale]} ${channel}`,
          ephemeral: true,
        });
      }
    }

    if (language) {
      const splitted = language.split(' ');
      const localeCode = splitted[0],
        languageName = splitted[1];

      if (locale === localeCode) {
        interaction.replied
          ? await interaction.followUp({
              content: localization.errors.botAlredyUseThisLocale[locale],
              ephemeral: true,
            })
          : interaction.reply({
              content: localization.errors.botAlredyUseThisLocale[locale],
              ephemeral: true,
            });
      } else {
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { locale: localeCode },
          { upsert: true }
        );

        interaction.replied
          ? await interaction.followUp({
              content: localization.languageChanged[localeCode] + languageName,
              ephemeral: true,
            })
          : await interaction.reply({
              content: localization.languageChanged[localeCode] + languageName,
              ephemeral: true,
            });
      }
    }

    if (!language && !channel) {
      await Settings.findOneAndUpdate(
        { _id: interaction.guild.id },
        { $unset: { rolePlayChannelID: '' } },
        { upsert: true }
      );

      interaction.replied
        ? await interaction.followUp({
            content: localization.channelReseted[locale],
            ephemeral: true,
            fetchReply: true,
          })
        : await interaction.reply({
            content: localization.channelReseted[locale],
            ephemeral: true,
            fetchReply: true,
          });
    }
  },
};
