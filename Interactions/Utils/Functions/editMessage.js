const { MessageEmbed } = require('discord.js');
const localization = require('../../../Utils/localization');
module.exports = async (interaction, locale) => {
  const getString = (optionName) => {
    return interaction.options.getString(optionName);
  };

  const link = interaction.options.getString('link').split('/');
  const messageChannelID = link[link.length - 2],
    messageID = link[link.length - 1];
  const message = await interaction.guild.channels.cache
    .get(messageChannelID)
    ?.messages.fetch(messageID);
  if (!(message || message?.author.id === interaction.client.user.id)) {
    return interaction.reply({
      content: localization.errors.noMessage[locale],
      ephemeral: true,
    });
  }

  const embed = message?.embeds[0] || new MessageEmbed();

  const messageContent =
      getString('message')?.replaceAll('\\n', '\n') || message.content,
    embedTitle = getString('embed-title');
  (embedDescription = getString('embed-description')?.replaceAll('\\n', '\n')),
    (embedColor = getString('embed-color')),
    (embedThumbnail = getString('embed-thumbnail')),
    (embedImage = getString('embed-image')),
    (embedFooter = getString('embed-footer')),
    (embedTimestamp = interaction.options.getBoolean('embed-footer-timestamp'));

  if (embedDescription || embedTitle) {
    embed
      .setDescription(embedDescription)
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setThumbnail(embedThumbnail)
      .setImage(embedImage)
      .setFooter(embedFooter);

    if (embedTimestamp) {
      embed.setTimestamp();
    }
  }

  if (!(embed.description || messageContent)) {
    return interaction.reply({
      content: localization.errors.noOptions[locale],
      ephemeral: true,
    });
  }
  if (embed.description) {
    await message.edit({ content: messageContent, embeds: [embed] });
  } else {
    await message.edit({ content: messageContent });
  }

  interaction.reply({
    content: localization.selectRoles.selectRolesMessageEdited[locale],
    ephemeral: true,
  });
};
