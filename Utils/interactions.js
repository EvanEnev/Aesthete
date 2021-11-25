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
        description:
          'When the bot should send all role-play messages (reset if empty)',
        channelTypes: ['GUILD_TEXT'],
      },
    ],
  },
  {
    name: 'update',
    description: 'Send update notification',
    options: [
      {
        type: 'STRING',
        name: 'message',
        description: 'The message for notification',
        required: true,
      },
    ],
  },
  {
    name: 'select-roles',
    description: 'Configure the select-roles module',
    type: 'SUB_COMMANDS_GROUP',
    options: [
      {
        type: 'SUB_COMMAND',
        name: 'create',
        description: 'Create new select-role',
        options: [
          {
            name: 'channel',
            type: 'CHANNEL',
            description: 'The channel when the bot should send the message',
            channelTypes: ['GUILD_TEXT'],
            required: true,
          },
          {
            name: 'role',
            type: 'ROLE',
            description: 'The role the bot should add',
            required: true,
          },
          {
            name: 'label',
            type: 'STRING',
            description: 'The text that will be in select menu',
            required: true,
          },
          {
            name: 'emoji',
            type: 'STRING',
            description:
              'The emoji that will be icon (can be from other server)',
          },
          {
            name: 'message',
            type: 'STRING',
            description:
              'Message that bot will send (can be skipped if will be used an embed)',
          },
          {
            name: 'embed-description',
            type: 'STRING',
            description:
              'The description of the embed (use \\n for a new line )',
          },
          {
            name: 'embed-color',
            type: 'STRING',
            description: 'The color of the embed',
          },
          {
            name: 'embed-thumbnail',
            type: 'STRING',
            description: 'URL to embeds thumbnail image',
          },
          {
            name: 'embed-image',
            type: 'STRING',
            description: 'URL to embeds image',
          },
          {
            name: 'embed-footer',
            type: 'STRING',
            description: 'The footer of the embed',
          },
          {
            name: 'embed-footer-timestamp',
            type: 'BOOLEAN',
            description: 'The timestamp of the embed',
          },
        ],
      },
      {
        type: 'SUB_COMMAND',
        name: 'edit',
        description: 'Edit a select-roles menu',
        options: [
          {
            name: 'link',
            type: 'STRING',
            description: 'URL to a message with select-roles menu',
            required: true,
          },
          {
            name: 'role',
            type: 'ROLE',
            description: 'The role you want to edit',
            required: true,
          },
          {
            name: 'action',
            type: 'STRING',
            description: 'What you want to do ?',
            choices: [
              { name: 'add', value: 'add' },
              { name: 'remove', value: 'remove' },
              { name: 'edit', value: 'edit' },
            ],
            required: true,
          },
          {
            name: 'label',
            type: 'STRING',
            description: 'The text that will be in select menu',
          },
          {
            name: 'new-role',
            type: 'ROLE',
            description: 'A role you want to replace with',
          },
          {
            name: 'emoji',
            type: 'STRING',
            description:
              'The emoji that will be icon (can be from other server)',
          },
        ],
      },
      {
        type: 'SUB_COMMAND',
        name: 'edit-message',
        description: 'Edit a select-roles message or embed',
        options: [
          {
            name: 'link',
            type: 'STRING',
            description: 'URL to a message with select-roles menu',
            required: true,
          },
          {
            name: 'message',
            type: 'STRING',
            description:
              'Message that bot will send (can be skipped if will be used an embed)',
          },
          {
            name: 'embed-description',
            type: 'STRING',
            description:
              'The description of the embed (use \\n for a new line )',
          },
          {
            name: 'embed-color',
            type: 'STRING',
            description: 'The color of the embed',
          },
          {
            name: 'embed-thumbnail',
            type: 'STRING',
            description: 'URL to embeds thumbnail image',
          },
          {
            name: 'embed-image',
            type: 'STRING',
            description: 'URL to embeds image',
          },
          {
            name: 'embed-footer',
            type: 'STRING',
            description: 'The footer of the embed',
          },
          {
            name: 'embed-footer-timestamp',
            type: 'BOOLEAN',
            description: 'The timestamp of the embed',
          },
        ],
      },
      {
        type: 'SUB_COMMAND',
        name: 'remove',
        description: 'Remove a select-roles menu',
        options: [
          {
            name: 'link',
            type: 'STRING',
            description: 'URL to a message with select-roles menu',
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
