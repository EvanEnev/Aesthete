const commandsData = require('../Utils/interactions');

module.exports = {
  name: 'interactionCreate',
  async run(interaction, client) {
    if (!(interaction.guild || interaction.guild.available)) return;
    if (interaction.isButton()) {
      const button = client.buttons.get(interaction.customId);
      if (!button) return;
      button.run(interaction, client);
    } else if (interaction.isSelectMenu()) {
      const select = client.selects.get(interaction.customId);
      if (!select) return;
      select.run(interaction, client);
    } else if (interaction.isCommand()) {
      const commandData = commandsData.find(
        (data) => data.name === interaction.commandName
      );
      if (commandData?.category === 'roleplay') {
        const file = require('../Interactions/RolePlay/index');
        file.run(interaction);
      } else {
        const command = client.interactions.get(interaction.commandName);
        if (!command) return;
        /* client.statcord.postCommand(
          interaction.commandName,
          interaction.user.id
        ); */
        if (command) command.run(interaction, client);
      }
    } else if (interaction.isContextMenu()) {
      const context = client.contexts.get(interaction.commandName);
      if (!context) return;
      context.run(interaction, client);
    }
  },
};
