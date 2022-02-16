const { MessageActionRow, MessageButton } = require('discord.js');
const localization = require('../../../Utils/localization');

module.exports = async ({ interaction, locale, member, dm, channel }) => {
  const content = localization.marriages.memberWantToMarry[locale.normal]
    .replaceAll('{member}', `${interaction.member}`)
    .replaceAll('{user}', `${member}`);

  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setStyle('SUCCESS')
      .setLabel(localization.buttons.accept[locale.normal])
      .setCustomId('marryAccept'),
    new MessageButton()
      .setStyle('DANGER')
      .setLabel(localization.buttons.reject[locale.normal])
      .setCustomId('marryReject')
  );

  if (dm) {
    await member.send({ content, components: [row] }).catch(() => {
      channel.send({ content, components: [row] });
    });
  } else {
    channel.send({ content, components: [row] });
  }
};
