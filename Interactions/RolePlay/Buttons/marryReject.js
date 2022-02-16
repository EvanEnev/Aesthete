const localization = require('../../../Utils/localization');

module.exports = {
  name: 'marryReject',
  run: async (interaction, locale) => {
    if (interaction.channel.type === 'dm') {
      interaction.reply({
        content: localization.marriages.marryDecline[locale.ephemeral],
      });
    } else {
      interaction.reply({
        content: localization.marriages.marryDecline[locale.normal],
      });
    }

    await interaction.message.edit({ components: [] });
  },
};
