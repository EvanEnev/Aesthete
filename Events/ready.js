const chalk = require('chalk');
// const devInteractions = require('../Utils/devInteractions');
const commandsData = require('../Utils/interactions');
module.exports = {
  name: 'ready',
  async run(client) {
    console.log(chalk.blue("I'm Ready"));
    // await client.guilds.cache
    //   .get('911568224221536337')
    //   .commands.set(devInteractions);
    await client.application.commands.set(commandsData);
  },
};
