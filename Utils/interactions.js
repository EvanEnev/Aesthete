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
        name: 'reset',
        description: 'Reset some option',
        autocomplete: true,
      },
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
        type: 'BOOLEAN',
        name: 'dm-member',
        description:
          'DM a member when possible for accept or reject a proposal',
      },
      {
        type: 'CHANNEL',
        name: 'role-play-channel',
        description: 'When the bot should send all role-play messages',
        channelTypes: ['GUILD_TEXT'],
      },
      {
        type: 'CHANNEL',
        name: 'marriages-channel',
        description: 'When the bot should send marriage messages',
        channelTypes: ['GUILD_TEXT'],
      },
    ],
  },
  {
    name: 'passport',
    description: "Get a member's passport",
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member whose passport you want to get',
      },
    ],
  },
  {
    name: 'about-me',
    description: 'Set about info in passport',
    options: [
      {
        type: 'STRING',
        name: 'info',
        description: 'The info you want to set',
        required: true,
      },
    ],
  },
  {
    name: 'marriage',
    description: 'Marry/divorce someone or list all marriages',
    type: 'SUB_COMMAND_GROUP',
    options: [
      {
        name: 'marry',
        type: 'SUB_COMMAND',
        description: 'Marry a member',
        options: [
          {
            name: 'member',
            type: 'USER',
            description: 'Member you want to marry',
            required: true,
          },
        ],
      },
      {
        name: 'divorce',
        type: 'SUB_COMMAND',
        description: 'Divorce a member',
        options: [
          {
            name: 'member',
            type: 'USER',
            description: 'Member you want to divorce',
            required: true,
          },
        ],
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
    name: 'kill',
    description: 'Kill a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want to kill',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    member: true,
    locales: { en: 'kills', ru: 'убивает' },
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
    name: 'cry',
    description: 'Cry yourself.',
    category: 'roleplay',
    options: [
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    locales: { en: 'crying', ru: 'плачет' },
  },
  {
    name: 'laugh',
    description: 'Have a laugh.',
    category: 'roleplay',
    options: [
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    locales: { en: 'laughs', ru: 'смеется' },
  },
  {
    name: 'bite',
    description: 'Bite a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want to bite',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    member: true,
    locales: { en: 'bites', ru: 'кусает' },
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
    name: 'pat',
    description: 'Pat a member',
    category: 'roleplay',
    options: [
      {
        type: 'USER',
        name: 'member',
        description: 'The member you want to pat',
      },
      {
        type: 'STRING',
        name: 'words',
        description: 'The words you want to say',
      },
    ],
    member: true,
    locales: { en: 'pats', ru: 'гладит' },
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
