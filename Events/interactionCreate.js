const commandsData = require('../Utils/interactions');
const Settings = require('../Schemas/Settings');
module.exports = {
  name: 'interactionCreate',
  async run(interaction, client) {
    if (!(interaction.guild || interaction.guild.available)) return;
    if (interaction.isButton()) {
      property = 'buttons';
    } else if (interaction.isSelectMenu()) {
      property = 'selects';
    } else if (interaction.isCommand()) {
      property = 'interactions';
    } else if (interaction.isContextMenu()) {
      property = 'contexts';
    } else if (interaction.isAutocomplete()) {
      property = 'autocompletes';
    }

    const action = client[property]?.get(
      interaction.commandName || interaction.customId
    );
    if (!action) return;

    if (property === 'interactions') {
      if (client.user.id !== '912631976282976287') {
        client.statcord.postCommand(
          interaction.commandName,
          interaction.user.id
        );
      }

      const commandData = commandsData.find(
        (data) => data.name === interaction.commandName
      );

      if (commandData?.category === 'roleplay') {
        const file = require('../Interactions/RolePlay/index');
        return file.run(interaction);
      }
    }

    action.run(interaction, locale);
  },
};
