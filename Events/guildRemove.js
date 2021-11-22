module.exports = {
  name: 'guildRemove',
  async run(guild) {
    const logsChannel = guild.client.channels.cache.get('911589145359548426');
    logsChannel.send({
      content: `Бот удалён с сервера ${
        guild.name
      }\n\nКолличество серверов: ${client.guilds.cache.size()}`,
    });
  },
};
