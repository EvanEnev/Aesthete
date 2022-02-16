const { readdirSync, existsSync } = require('fs');

module.exports = function (client) {
  readdirSync('./Interactions/').forEach((dir) => {
    if (!existsSync(`./Interactions/${dir}/Autocompletes`)) return;

    const files = readdirSync(`./Interactions/${dir}/Autocompletes`).filter(
      (file) => file.endsWith('.js')
    );

    for (const file of files) {
      let pull = require(`../Interactions/${dir}/Autocompletes/${file}`);

      if (pull.name) {
        client.autocompletes.set(pull.name, pull);
      }
    }
  });
};
