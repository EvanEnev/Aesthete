module.exports = {
  name: 'update',
  run: async (interaction) => {
    if (
      !(
        interaction.user.id === '352389928543584256' ||
        interaction.user.id === '400631024029007878'
      )
    ) {
      return;
    }

    const message = interaction.options
      .getString('message')
      .replaceAll('\\n', '\n');

    interaction.client.guilds.cache.forEach((guild) => {
      const channel = guild.publicUpdatesChannel;
      channel.send({ content: message });
    });
  },
};
