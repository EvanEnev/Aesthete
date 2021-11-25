const { readdirSync, existsSync } = require('fs');

module.exports = (client) => {
  readdirSync('./Interactions/').forEach((dir) => {
    if (!existsSync('./Interactions/${dir}/Buttons')) return;

    const files = readdirSync(`./Interactions/${dir}/Buttons`).filter((file) =>
      file.endsWith('.js')
    );

    for (const file of files) {
      let pull = require(`../Interactions/${dir}/Buttons/${file}`);

      if (pull.name) {
        client.buttons.set(pull.name, pull);
      }
    }
  });
};
