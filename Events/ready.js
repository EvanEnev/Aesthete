// const chalk = require('chalk');
const devInteractions = require('../Utils/devInteractions');
const commandsData = require('../Utils/interactions');
module.exports = {
    name: 'ready',
    async run(client) {
        console.log("I'm Ready");
        if (client.user.id === '910633214245228614') {
            await client.application.commands.set(commandsData);
        } else {
            await client.application.commands.set([]);
            ['911568224221536337', '721426713372000306'].forEach(async (guildID) => {
                await client.guilds.cache.get(guildID).commands.set(devInteractions);
            });
        }
    },
};
