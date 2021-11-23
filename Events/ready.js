const chalk = require('chalk');
const commandsData = require('../Utils/interactions');
const devInteraction = require('../Utils/devInteractions');

module.exports = {
  name: 'ready',
  async run(client) {
    console.log(chalk.blue("I'm Ready"));
    await client.guilds.cache
      .get('911568224221536337')
      .commands.set(devInteraction);
  },
};
