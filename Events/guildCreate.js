module.exports = {
  name: 'guildCreate',
  async run(guild) {
    const logsChannel = guild.client.channels.cache.get('911589145359548426');
    logsChannel.send({ content: `Бот добавлен на сервер ${guild.name}` });

    const channels = await guild.channels.fetch();
    const highestChannel = channels
      .filter(
        (channel) =>
          channel.permissionsFor(guild.client.user.id).has('SEND_MESSAGES') &&
          channel.permissionsFor(guild.client.user.id).has('VIEW_CHANNEL')
      )
      .sort((a, b) => a - b);
    highestChannel.send({
      content:
        'Hey, thanks for adding me !\nMy name is **Aesthete** and I was created for role-playing right in the Discord.\nFor list of my commands type `/` in a text channel.\n\nTo change bots language use `/config language` command\nЧтобы изменить язык бота используй команду `/config language`',
    });
  },
};
