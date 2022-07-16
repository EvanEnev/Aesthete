const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
} = require('discord.js')
const emojiRegex = require('emoji-regex')
const localization = require('../../../Utils/localization')
module.exports = async (interaction, locale) => {
  const getString = (optionName) => {
    return interaction.options.getString(optionName)
  }

  const embed = new MessageEmbed()
  const role = interaction.options.getRole('role'),
    channel = interaction.options.getChannel('channel'),
    label = getString('label')

  const rawEmoji = getString('emoji')?.split(/ +/g)[0],
    messageContent = getString('message')?.replaceAll('\\n', '\n'),
    embedTitle = getString('embed-title'),
    embedDescription = getString('embed-description')?.replaceAll('\\n', '\n'),
    embedColor = getString('embed-color'),
    embedThumbnail = getString('embed-thumbnail'),
    embedImage = getString('embed-image'),
    embedFooter = getString('embed-footer'),
    embedTimestamp = interaction.options.getBoolean('embed-footer-timestamp')

  console.debug(messageContent)
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu().setCustomId('addRoles').setMinValues(0)
  )

  if (
    rawEmoji &&
    (rawEmoji.startsWith('<a:') ||
      rawEmoji.startsWith('<:') ||
      emojiRegex().test(rawEmoji))
  ) {
    row.components[0].addOptions({
      label: label,
      value: role.id,
      emoji: rawEmoji,
    })
  } else {
    row.components[0].addOptions({ label: label, value: role.id })
  }

  if (embedDescription || embedTitle) {
    embed.setColor(embedColor).setThumbnail(embedThumbnail).setImage(embedImage)

    if (embedTitle) {
      embed.setTitle(embedTitle)
    }

    if (embedDescription) {
      embed.setDescription(embedDescription)
    }

    if (embedFooter) {
      embed.setFooter(embedFooter)
    }

    if (embedTimestamp) {
      embed.setTimestamp()
    }
  }

  if (!(embed.description || embed.title || messageContent)) {
    return interaction.reply({
      content: localization.errors.noMessageOrEmbed[locale],
      ephemeral: true,
    })
  }

  if (interaction.guild.roles.everyone === role || role.managed) {
    return interaction.reply({
      content: localization.errors.unSupportedRole[locale],
      ephemeral: true,
    })
  }

  if (embed.description || embed.title) {
    channel.send({
      content: messageContent,
      embeds: [embed],
      components: [row],
    })
  } else {
    channel.send({
      content: messageContent,
      components: [row],
    })
  }

  interaction.reply({
    content: localization.selectRoles.selectRolesCreated[locale.ephemeral],
    ephemeral: true,
  })
}
