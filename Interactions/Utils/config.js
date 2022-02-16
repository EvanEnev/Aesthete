const Settings = require('../../Schemas/Settings');
const localization = require('../../Utils/localization');

module.exports = {
  name: 'config',
  run: async (interaction, locale) => {
    const reply = async (content) => {
      interaction.replied
        ? await interaction.followUp({
            content,
            ephemeral: true,
          })
        : await interaction.reply({
            content,
            ephemeral: true,
          });
    };

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

    const getOption = (property) => {
      return interaction.options.get(property);
    };

    if (getOption('role-play-channel')) {
      if (
        !(
          getOption('role-play-channel')
            .permissionsFor(interaction.client.user.id)
            .has('SEND_MESSAGES') &&
          getOption('role-play-channel')
            .permissionsFor(interaction.client.user.id)
            .has('VIEW_CHANNEL')
        )
      ) {
        reply(localization.errors.cannotSendMessages[locale]);
      } else {
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { rolePlayChannelID: getOption('role-play-channel').id },
          { upsert: true }
        );

        reply(
          `${localization.channelChanged[locale]} ${getOption(
            'role-play-channel'
          )}`
        );
      }
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

    if (language) {
      const splitted = language.split(' ');
      const localeCode = splitted[0],
        languageName = splitted[1];

      if (locale === localeCode) {
        reply(localization.errors.botAlredyUseThisLocale[locale]);
      } else {
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { locale: localeCode },
          { upsert: true }
        );

        reply(localization.languageChanged[localeCode] + languageName);
      }
    }
    if (getOption('dm-member')) {
      //TODO
    }

    if (getOption('toReset')) {
      const name = getOption('toReset');
      await Settings.findOneAndUpdate(
        { _id: interaction.guild.id },
        { $unset: { name: '' } }
      );

      reply(
        localization.settingReseted[locale].replace('{setting}', `${name}`)
      );
    }
  },
};
