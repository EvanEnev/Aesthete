const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Settings = require('../../Schemas/Settings');
const { colors } = require('../../Utils/config');
const localization = require('../../Utils/localization');

module.exports = {
  name: 'help',
  run: async (interaction) => {
    const settings = await Settings.findOne({
      _id: interaction.guild.id,
    });

    const locale = settings?.locale || 'en';

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
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setLabel(localization.voteForBot[locale]),
      new MessageButton()
        .setStyle('LINK')
        .setURL('https://github.com/EvanEnev/Aesthete')
        .setLabel('GitHub')
    );

    interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
