const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { colors } = require('../../Utils/config');
const localization = require('../../Utils/localization');

module.exports = {
  name: 'help',
  run: async (interaction, locale) => {
    const embed = new MessageEmbed()
      .setColor(colors.default)
      .setDescription(localization.description[locale]);

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle('LINK')
        .setURL(
          'https://discord.com/api/oauth2/authorize?client_id=910633214245228614&permissions=8&scope=bot%20applications.commands'
        )
        .setLabel(localization.inviteBot[locale]),
      new MessageButton()
        .setStyle('LINK')
        .setURL('https://top.gg/bot/910633214245228614')
        .setLabel(localization.voteForBot[locale]),
      new MessageButton()
        .setStyle('LINK')
        .setURL('https://github.com/EvanEnev/Aesthete')
        .setLabel('GitHub')
    );

    interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  }
};
