const { readdirSync } = require('fs');

module.exports = (client) => {
  readdirSync('./Interactions/').forEach((dir) => {
    const files = readdirSync(`./Interactions/${dir}/`).filter((file) =>
      file.endsWith('.js')
    );

    for (const file of files) {
      let pull = require(`../Interactions/${dir}/${file}`);

      if (pull.name) {
        client.interactions.set(pull.name, pull);
      }
    }
  });
};
