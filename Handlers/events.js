const { readdirSync } = require('fs');

module.exports = (client) => {
  const files = readdirSync('./Events').filter((file) => file.endsWith('.js'));

  for (const file of files) {
    const pull = require(`../Events/${file}`);

    pull.once
      ? client.once(pull.name, (...args) => pull.run(...args, client))
      : client.on(pull.name, (...args) => pull.run(...args, client));
  }
};
