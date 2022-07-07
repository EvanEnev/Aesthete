const localization = require('../../../Utils/localization');
module.exports = async (interaction, locale) => {
  const link = interaction.options.getString('link').split('/');
  const messageChannelID = link[link.length - 2],
    messageID = link[link.length - 1];
  const message = await interaction.guild.channels.cache
    .get(messageChannelID)
    ?.messages.fetch(messageID);

  if (!(message || message.author.id === interaction.client.user.id)) {
    return interaction.reply({
      content: localization.errors.noMessage[locale],
      ephemeral: true,
    });
  }

  const rows = message.components;
  const newComponents = [];
  let hasMenu = false;
  rows?.forEach((row, index) => {
    if (row.components[0].type !== 'SELECT_MENU') {
      newComponents.push(rows[index]);
    } else {
      hasMenu = true;
    }
  });

  if (!hasMenu) {
    return interaction.reply({
      content: localization.errors.messageWithNoSelectRoles[locale],
      ephemeral: true,
    });
  }

  await message.edit({ components: newComponents });
  interaction.reply({
    content: localization.selectRoles.selectRolesRemoved[locale],
    ephemeral: true,
  });
};
