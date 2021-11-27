module.exports = {
  name: 'guildCreate',
  async run(guild) {
    const logsChannel = guild.client.channels.cache.get('911589145359548426');
    logsChannel.send({
      content: `Бот добавлен на сервер ${guild.name}\n\nКолличество серверов: ${guild.client.guilds.cache.size}`,
    });

    const channels = await guild.channels.fetch();
    const highestChannel = channels
      .filter(
        (channel) =>
          channel.permissionsFor(guild.client.user.id).has('SEND_MESSAGES') &&
          channel.permissionsFor(guild.client.user.id).has('VIEW_CHANNEL') &&
          channel.type === 'GUILD_TEXT'
      )
      .sort((a, b) => a - b)
      .first();

    if (!highestChannel) return;

    highestChannel.send({
      content:
        'Hey, thanks for adding me !\nMy name is **Aesthete** and I was created for role-playing right in the Discord.\nFor list of my commands type `/` in a text channel.\n\nПривет, спасибо, что добавил меня !\nМеня зовут Эстет и я был создан для роллплей-действий прямо в Дискорде.\nЧтобы узнать мои команды, просто пропиши `/` в текстовом канале. \n\n\nTo change bots language use `/config language` command\nЧтобы изменить язык бота используй команду `/config language`',
    });
  },
};
