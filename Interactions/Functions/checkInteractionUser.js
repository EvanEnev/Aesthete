const { Util } = require('discord.js');
const localization = require('../../Utils/localization');

module.exports = (interaction, authorPosition, locale) => {
  const usersIDs = Util.discordSort(interaction.message.mentions.users);
  const usersArray = [...usersIDs.keys()];
  const authorID = usersArray[authorPosition - 1];
  if (interaction.user.id === authorID) {
    return true;
  } else {
    interaction.reply({
      content: localization.errors.youCannotInteract[locale.ephemeral],
      ephemeral: true,
    });
    return false;
  }
};
