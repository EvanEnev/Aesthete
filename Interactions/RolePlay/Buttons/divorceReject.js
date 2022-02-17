const localization = require('../../../Utils/localization');
const checkInteractionUser = require('../../Functions/checkInteractionUser');

module.exports = {
  name: 'divorceReject',
  run: async (interaction, locale) => {
    if (!checkInteractionUser(interaction, 1, locale)) {
      return;
    }
    if (interaction.channel.type === 'dm') {
      interaction.reply({
        content: localization.marriages.divorceDecline[locale.ephemeral],
      });
    } else {
      interaction.reply({
        content: localization.marriages.divorceDecline[locale.normal],
      });
    }

    await interaction.message.edit({ components: [] });
  },
};
