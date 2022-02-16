module.exports = {
  description: {
    ru: 'Привет !\nМеня зовут **Эстет** и я создан для отыгрывания ролплей-действий прямо в Дискорде.\nЧтобы узнать мои команды просто пропиши `/` в текстовый канал.\n\nЧтобы изменить язык бота используй команду `/config language`\nTo change bots language use `/config language` command',
    en: 'Hi !\nMy name is **Aesthete** and I was created for role-playing right in the Discord.\nFor list of my commands type `/` in a text channel.\n\nTo change bots language use `/config language` command\nЧтобы изменить язык бота используй команду `/config language`',
  },
  inviteBot: {
    ru: 'Добавить к себе',
    en: 'Invite me',
  },
  voteForBot: { ru: 'Проголосуй за меня', en: 'Vote for me' },
  missingPermissions: {
    ru: '**У тебя нет прав для этого\nНедостающие права: **',
    en: "**You don't have permissions to do this\nMissing permissions: **",
  },
  rolePlayComplete: {
    ru: '**Действие успешно отправлено**',
    en: '**Action successfully submitted**',
  },
  channelChanged: {
    ru: '**Теперь я буду отправлять сообщения с ролплей-действиями в**',
    en: '**Since now I will send role-play messages in**',
  },
  channelReseted: {
    ru: '**Канал для ролплей-действий сброшен**',
    en: '**Channel for role-play actions reseted**',
  },
  languageChanged: {
    ru: '**Теперь я буду использовать этот язык: **',
    en: '**Since now I will use this language: **',
  },
  settingReseted: {
    ru: '**Настройка `{setting}` сброшена**',
    en: '**The `{setting}` setted is reset**',
  },
  infoChanged: {
    ru: '**Информация изменена**',
    en: '**Info changed**',
  },
  infoCommand: {
    ru: '*Для добавления используйте `/about-me`*',
    en: 'Use `/about-me` to set*',
  },
  selectRoles: {
    selectRolesCreated: {
      ru: '**Выбор роли создан**',
      en: '**Select-roles created**',
    },
    selectRolesRemoved: {
      ru: '**Выбор роли удалён**',
      en: '**Select-roles removed**',
    },
    selectRolesMessageEdited: {
      ru: '**Сообщение выбора роли изменёно**',
      en: '**Select-roles message edited**',
    },
    roleAdded: {
      ru: '**Роль добавлена**',
      en: '**Role added**',
    },
    roleRemoved: {
      ru: '**Роль удалена**',
      en: '**Role removed**',
    },
    roleChanged: { ru: '**Роль изменена**', en: '**Role edited**' },
  },
  marriages: {
    youAlredyMarried: {
      ru: '**Вы уже в браке с {member}**',
      en: '**You already married to {member}**',
    },
    memberAlreadyMarried: {
      ru: '**Этот пользователь уже в браке с {member}**',
      en: '**This member already married to {member}**',
    },
    youAreNotMarried: {
      ru: '**Вы не в браке**',
      en: '**You are not married**',
    },
    memberIsNotMarriedWithYou: {
      ru: '**Этот пользователеь не в браке с Вами**',
      en: '**This member is not married to you**',
    },
    youCannotDoItWithYourself: {
      ru: '**Нельзя {action} с собой**',
      en: '**You cannot {action} yourself**',
    },
    memberWantToMarry: {
      ru: '**{member}, участник {user} хочет вступить с Вами в брак**',
      en: '**{member}, {user} want to marry you**',
    },
    memberWantToDivorce: {
      ru: '**{member}, участник {user} хочет развестись с Вами**',
      en: '**{member}, {user} want to divorce you**',
    },
    marriageMessageSent: {
      ru: '**Предложение о браке отправлено**',
      en: '**Marriage proposal sent**',
    },
    divorceMessageSent: {
      ru: '**Предложение о разводе отправлено**',
      en: '**Divorce proposal sent**',
    },
    marryAcceptChannel: {
      ru: '**{firstUser} и {secondUser} теперь в браке !**',
      en: '**{firstUser} and {secondUser} are now married !**',
    },
    divorceAcceptChannel: {
      ru: '**{firstUser} и {secondUser} теперь не в браке**',
      en: '**{firstUser} and {secondUser} are no longer married**',
    },
    marryAcceptMember: {
      ru: '**Вы приняли предложение о браке**',
      en: '**You have accepted the marriage proposal**',
    },
    divorceAcceptMember: {
      ru: '**Вы приняли предложение о разводе**',
      en: '**You have accepted the divorce proposal**',
    },
    marryDecline: {
      ru: '**Вы отклонили предложение о браке**',
      en: '**You have rejected the marriage proposal**',
    },
    divorceDecline: {
      ru: '**Вы отклонили предложение о разводе**',
      en: '**You have rejected the divorce proposal**',
    },
  },

  embeds: {
    passport: {
      title: { ru: '**Пасспорт {member}**', en: "**{member}'s passport**" },
      fields: {
        ru: [
          { name: 'Создан:', value: '<t:{created}>', inline: true },
          { name: 'Присоединился:', value: '<t:{joined}>', inline: true },
          { name: '\u200B', value: '\u200B' },
          { name: 'О себе:', value: '{about}' },
        ],
        en: [
          { name: 'Create:', value: '<t:{created}>', inline: true },
          { name: 'Joined:', value: '<t:{joined}>', inline: true },
          { name: '\u200B', value: '\u200B' },
          { name: 'About me:', value: '{about}' },
        ],
      },
    },
  },
  errors: {
    memberRequired: {
      ru: '**Действие требует указания участника**',
      en: '**This action required a member**',
    },
    rolePlayeWithBot: {
      ru: '**Нельзя совершить ролплей-действие с ботом**',
      en: '**You cannot use role-play action with a bot**',
    },
    rolePlayeWithYourself: {
      ru: '**Нельзя совершить ролплей-действие с собой**',
      en: '**You cannot use role-play action with yourself**',
    },
    cannotSendMessages: {
      ru: '**Я не могу отправлять сообщения в этот канал**',
      en: '**I cannot send messages in this channel**',
    },
    botAlredyUseThisLocale: {
      ru: '**Я уже использую этот язык**',
      en: '**I already use this language**',
    },
  },

  buttons: {
    accept: { ru: 'Принять', en: 'Accept' },
    reject: { ru: 'Отклонить', en: 'Reject' },
  },
  permissions: {
    administrator: {
      ru: 'Администратор',
      en: 'Administrtor',
    },
    manageGuild: {
      ru: 'Управление сервером',
      en: 'Manage Guild',
    },
  },
};
