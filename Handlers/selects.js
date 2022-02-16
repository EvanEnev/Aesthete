const { readdirSync, existsSync } = require('fs');

module.exports = (client) => {
  readdirSync('./Interactions/').forEach((dir) => {
    if (!existsSync('./Interactions/${dir}/selects')) return;

    const files = readdirSync(`./Interactions/${dir}/selects`).filter((file) =>
      file.endsWith('.js')
    );

    for (const file of files) {
      let pull = require(`../Interactions/${dir}/selects/${file}`);

      if (pull.name) {
        client.selects.set(pull.name, pull);
      }
    }
  });
};
