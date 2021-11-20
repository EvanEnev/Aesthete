const chalk = require('chalk');
const commandsData = require('../Utils/interactions');

module.exports = {
  name: 'ready',
  async run(client) {
    console.log(chalk.blue("I'm Ready"));
    await client.applications.commands.set(command);
  },
};
