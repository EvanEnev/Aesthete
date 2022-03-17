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
          localization.missingPermissions[locale.ephemeral] +
          localization.permissions.manageGuild[locale.ephemeral],
        ephemeral: true,
      });

    const settings = await Settings.findOne({ _id: interaction.guild.id });

    const getOption = (property) => {
      return interaction.options.get(property);
    };

    let NewLocale = '';
    if (getOption('languge')) {
      const splitted = getOption('languge').split(' ');
      const LocaleCode = splitted[0],
        LanguageName = splitted[1];

      if (locale === LocaleCode) {
        reply(localization.errors.botAlredyUseThisLocale[locale.ephemeral]);
      } else {
        NewLocale = LocaleCode;
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { locale: LocaleCode },
          { upsert: true }
        );

        reply(localization.languageChanged[LocaleCode] + LanguageName);
      }
    }

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
        reply(
          localization.errors.cannotSendMessages[NewLocale || locale.ephemeral]
        );
      } else {
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { rolePlayChannelID: getOption('role-play-channel').id },
          { upsert: true }
        );

        reply(
          `${
            localization.channelChanged[NewLocale || locale.ephemeral]
          } ${getOption('role-play-channel')}`
        );
      }
      await Settings.findOneAndUpdate(
        { _id: interaction.guild.id },
        { rolePlayChannelID: channel.id },
        { upsert: true }
      );

      await interaction.reply({
        content: `${
          localization.channelChanged[NewLocale || locale.ephemeral]
        } ${channel}`,
        ephemeral: true,
      });
    }

    if (getOption('dm-members')) {
      if (settings?.dmMember) {
        reply(localization.errors.botAlredyUseDMs[locale.ephemeral]);
      } else {
        await Settings.findOneAndUpdate(
          { _id: interaction.guild.id },
          { dmMembers: getOption('dm-members') },
          { upsert: true }
        );

        reply(localization.dmChanged[NewLocale || locale.ephemeral]);
      }
    }

    if (getOption('reset')) {
      const name = getOption('reset');
      await Settings.findOneAndUpdate(
        { _id: interaction.guild.id },
        { $unset: { name: '' } }
      );

      reply(
        localization.settingReseted[NewLocale || locale.ephemeral].replace(
          '{setting}',
          `${name}`
        )
      );
    }
  },
};
