module.exports = [
  {
    name: 'help',
    description: 'Get info about the bot',
  },
  {
    name: 'config',
    description: 'Configure the bot',
    options: [
      {
        type: 'STRING',
        name: 'language',
        description: 'The language you want to use on this server',
        choices: [
          { name: 'English', value: 'en English' },
          { name: 'Русский', value: 'ru Русский' },
        ],
      },
      {
        type: 'CHANNEL',
        name: 'channel',
        description: 'When bot should send all role-play messages',
        channelTypes: ['GUILD_TEXT'],
      },
    ],
  },
  {
    name: 'hug',
    description: 'Hug a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want to hug',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    member: true,
    locales: { en: 'hugs', ru: 'обнимает' },
  },
  {
    name: 'hit',
    description: 'Hit a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want to hit',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    member: true,
    locales: { en: 'hits', ru: 'ударяет' },
  },
  {
    name: 'kiss',
    description: 'Kiss a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want to kiss',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    member: true,
    locales: { en: 'kisses', ru: 'целует' },
  },
  {
    name: 'angry',
    description: 'Angry without or at a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want angry at',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    locales: { en: 'angry at', ru: 'злиться на' },
  },
];
