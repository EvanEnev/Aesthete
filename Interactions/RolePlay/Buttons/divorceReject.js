const localization = require('../../../Utils/localization');

module.exports = {
  name: 'divorceReject',
  run: async (interaction, locale) => {
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
