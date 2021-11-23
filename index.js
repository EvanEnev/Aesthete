const chalk = require('chalk');
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const mongoose = require('mongoose');
const tenor = require('tenorjs');
const { colors } = require('./Utils/config');
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

process.on('unhandledRejection', (err) => {
  error(err);
});

process.on('uncaughtException', (err) => {
  error(err);
});

function error(error) {
  const stack = error.stack.replaceAll('\n', '').split(/ +/g);
  const position = stack.indexOf('Object.run');

  const errorsChannel = client.channels.cache.get('911568304022384640');

  const embed = new MessageEmbed()
    .setTitle('Ошибка')
    .setColor(colors.error)
    .addFields([
      { name: 'Сообщение:', value: `${error}` },
      {
        name: 'Файл:',
        value: `${stack[position + 1].replaceAll('(', '').replaceAll(')', '')}`,
      },
    ]);

  console.error(
    chalk.red(`[${stack[0].replaceAll(':', '')}] ` + chalk.white(error.stack)),
    error
  );

  errorsChannel.send({ embeds: [embed] });
}

client.login(process.env.devToken);
