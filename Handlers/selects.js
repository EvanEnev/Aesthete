const { readdirSync, existsSync } = require('fs');

module.exports = (client) => {
  readdirSync('./Interactions/').forEach((dir) => {
    if (!existsSync(`./Interactions/${dir}/Selects`)) return;

    const files = readdirSync(`./Interactions/${dir}/Selects`).filter((file) =>
      file.endsWith('.js')
    );

    for (const file of files) {
      let pull = require(`../Interactions/${dir}/Selects/${file}`);

      if (pull.name) {
        client.selects.set(pull.name, pull);
      }
    }
  });
};
