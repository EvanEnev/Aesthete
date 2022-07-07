const localization = require('../../../Utils/localization');
const addRole = require('./addRole');
const editRole = require('./editRole');
const removeRole = require('./removeRole');
module.exports = async (interaction, locale) => {
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

  const rows = message.components;
  let hasMenu = false;
  rows?.forEach((row) => {
    if (row.components[0].type === 'SELECT_MENU') {
      hasMenu = true;
    }
  });

  if (!hasMenu) {
    return interaction.reply({
      content: localization.errors.messageWithNoSelectRoles[locale],
      ephemeral: true,
    });
  }

  const role = interaction.options.getRole('role');
  switch (interaction.options.getString('action')) {
    case 'add':
      addRole(interaction, locale, role, message);
      break;
    case 'edit':
      editRole(interaction, locale, role, message);
      break;
    case 'remove':
      removeRole(interaction, locale, role, message);
      break;
  }
};
