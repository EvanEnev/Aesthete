const localization = require('../../Utils/localization');
const Members = require('../../Schemas/Members');
const Settings = require('../../Schemas/Settings');
module.exports = {
  name: 'marriage',
  run: async (interaction, locale) => {
    const action = interaction.options.getSubcommand(),
      member = interaction.options.getMember('member');

    const localeActions = {
      ru: { marry: 'вступить в брак', divorce: 'развестись' },
      en: { marry: 'marry', divorce: 'divorce' },
    };

    const memberData = await Members.findOne({
        id: interaction.user.id,
        guildID: interaction.guild.id,
      }),
      secondMemberData = await Members.findOne({
        id: member.id,
        guildID: interaction.guild.id,
      });

    if (memberData?.marriage && action === 'marry') {
      return interaction.reply({
        content: localization.marriages.youAlredyMarried[
          locale.ephemeral
        ].replace('{member}', `${member}`),
        ephemeral: true,
      });
    }

    if (secondMemberData?.marriage && action === 'marry') {
      return interaction.reply({
        content: localization.memberAlreadyMarried[locale.ephemeral].replace(
          '{member}',
          `${member}`
        ),
        ephemeral: true,
      });
    }

    if (!memberData?.marriage && action === 'divorce') {
      return interaction.reply({
        content: localization.marriages.youAreNotMarried[locale.ephemeral],
        ephemeral: true,
      });
    }

    if (
      memberData?.marriage &&
      secondMemberData?.id !== memberData?.marriage &&
      action === 'divorce'
    ) {
      return interaction.reply({
        content:
          localization.marriages.memberIsNotMarriedWithYou[locale.ephemeral],
        ephemeral: true,
      });
    }

    if (interaction.member.id === member.id) {
      return interaction.reply({
        content: localization.marriages.youCannotDoItWithYourself[
          locale.ephemeral
        ].replace('{action}', `${localeActions[locale.ephemeral][action]}`),
        ephemeral: true,
      });
    }

    const settings = await Settings.findOne({ _id: interaction.guild.id });

    let channel = await interaction.guild.channels.fetch(
      settings?.weddingsChannel
    );

    if (typeof channel === 'object') {
      channel = interaction.channel;
    }

    let dm = false;

    if (settings?.dmMembers) {
      dm = true;
    }

    require(`./Functions/${action}`)({
      interaction,
      locale,
      member,
      dm,
      channel,
    });

    if (action === 'divorce') {
      interaction.reply({
        content: localization.marriages.divorceMessageSent[locale.ephemeral],
        ephemeral: true,
      });
    } else {
      interaction.reply({
        content: localization.marriages.marriageMessageSent[locale.ephemeral],
        ephemeral: true,
      });
    }
  },
};
