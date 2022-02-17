const { MessageActionRow, MessageButton } = require('discord.js');
const localization = require('../../../Utils/localization');

module.exports = async ({ interaction, locale, member, dm, channel }) => {
  const content = localization.marriages.memberWantToDivorce[locale.normal]
    .replaceAll('{member}', `${member}`)
    .replaceAll('{user}', `${interaction.member}`);

  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setStyle('SUCCESS')
      .setLabel(localization.buttons.accept[locale.normal])
      .setCustomId('divorceAccept'),
    new MessageButton()
      .setStyle('DANGER')
      .setLabel(localization.buttons.reject[locale.normal])
      .setCustomId('divorceReject')
  );

  if (dm) {
    row.components[0].label = localization.buttons.accept[locale.ephemeral];
    row.components[1].label = localization.buttons.accept[locale.ephemeral];

    await member.send({ content, components: [row] }).catch(() => {
      row.components[0].label = localization.buttons.accept[locale.normal];
      row.components[1].label = localization.buttons.accept[locale.normal];

      channel.send({ content, components: [row] });
    });
  } else {
    channel.send({ content, components: [row] });
  }
};
