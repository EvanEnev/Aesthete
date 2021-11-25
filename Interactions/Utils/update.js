module.exports = {
  name: 'update',
  run: async (interaction) => {
    if (!interaction.client.application.owner.members.has(interaction.user.id))
      return;
    const message = interaction.options
      .getString('message')
      .replaceAll('\\n', '\n');

    interaction.client.guilds.forEach((guild) => {
      const channel = guild.publicUpdatesChannel;
      channel.send({ content: message });
    });
  },
};
