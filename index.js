const { Client, Intents, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const mongoose = require('mongoose');
const tenor = require('tenorjs');
const intents = Intents.FLAGS;

const client = new Client({
  presence: {
    status: 'online',
    activities: [{ name: '/help', type: 'PLAYING' }],
  },
  intents: [intents.GUILDS, intents.GUILD_MEMBERS],
});

client.tenor = tenor.client({
  Key: '30RVOJKOMTA0',
  Filter: 'low',
  Locale: 'en_US',
  MediaFilter: 'minimal',
  DateFormat: 'D/MM/YYYY - H:mm:ss A',
});

client.interactions = new Collection();
client.buttons = new Collection();
client.selects = new Collection();

const handlers = readdirSync('./Handlers').filter((file) =>
  file.endsWith('.js')
);

for (const file of handlers) {
  require(`./Handlers/${file}`)(client);
}

mongoose.connect(process.env.mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.login(process.env.token);
