const chalk = require('chalk');
const devInteractions = require('../Utils/devInteractions');
const commandsData = require('../Utils/interactions');
const devInteraction = require('../Utils/devInteractions');

module.exports = {
  name: 'ready',
  async run(client) {
    console.log(chalk.blue("I'm Ready"));
    if (client.user.id === '910633214245228614') {
      await client.application.commands.set(commandsData);
    } else {
      await client.guilds.cache
        .get('911568224221536337')
        .commands.set(devInteractions);
    }
  },
};
