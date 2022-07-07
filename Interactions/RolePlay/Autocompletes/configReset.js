module.exports = {
  name: 'config',
  run: async (interaction) => {
    const value = interaction.options.getFocused();
    const defaultValues = ['Language', 'DM Members'];
    let filtredValues = [];
    defaultValues.forEach((action) => {
      filtredValues.push({ name: action, value: action });
    });
    let values = [];

    let index = 0;
    for (let i = 0; i < 25; i++) {
      if (filtredValues[i]?.name.includes(value)) {
        values.push(filtredValues[i]);
        index++;
      }
    }

    if (!values.length) {
      for (let i = 0; i < 25; i++) {
        values.push(filtredValues[i]);
      }
    }

    interaction.respond(values);
  },
};
