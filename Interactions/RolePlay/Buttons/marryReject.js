const localization = require('../../../Utils/localization');
const checkInteractionUser = require('../../Functions/checkInteractionUser');

module.exports = {
  name: 'marryReject',
  run: async (interaction, locale) => {
    if (!(await checkInteractionUser(interaction, 1, locale))) {
      return;
    }
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
