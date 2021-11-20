const chalk = require('chalk');
const commandsData = require('../Utils/interactions');

module.exports = {
  name: 'ready',
  async run(client) {
    console.log(chalk.blue("I'm Ready"));
    await client.guilds.cache
      .get('825422205890199622')
      .commands.set(commandsData);
    // await client.commands.set(command);
  },
};
