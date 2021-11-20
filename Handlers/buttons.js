const { readdirSync, existsSync } = require('fs');

module.exports = (client) => {
  readdirSync('./Interactions/').forEach((dir) => {
    if (!existsSync('./Interactions/${dir}/buttons')) return;

    const files = readdirSync(`./Interactions/${dir}/buttons`).filter((file) =>
      file.endsWith('.js')
    );

    for (const file of files) {
      let pull = require(`../Interactions/${dir}/buttons/${file}`);

      if (pull.name) {
        client.buttons.set(pull.name, pull);
      }
    }
  });
};
