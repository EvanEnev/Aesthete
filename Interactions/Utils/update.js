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
      const channel =
        guild.publicUpdatesChannel ||
        guild.channels.cache
          .filter(
            (channel) =>
              channel
                .permissionsFor(guild.client.user.id)
                .has('SEND_MESSAGES') &&
              channel
                .permissionsFor(guild.client.user.id)
                .has('VIEW_CHANNEL') &&
              channel.type === 'GUILD_TEXT'
          )
          .sort((a, b) => a - b)
          .first();
      channel.send({ content: message });
    });
  }
};
