module.exports = [
  {
    name: 'config',
    description: 'Configure the bot',
    type: 'SUB_COMMAND_GROUP',
    options: [
      {
        type: 'SUB_COMMAND',
        name: 'language',
        description: 'The language you want to use on this server',
        options: [
          {
            type: 'STRING',
            name: 'set',
            description: 'The language you want to use on this server',
            choices: [
              { name: 'English', value: 'en English' },
              { name: 'Русский', value: 'ru Русский' },
            ],
          },
        ],
      },
      {
        type: 'SUB_COMMAND_GROUP',
        name: 'channel',
        description: 'When bot should send all role-play messages',
        options: [
          {
            type: 'SUB_COMMAND',
            name: 'set',
            description: 'When bot should send all role-play messages',
            options: [
              {
                type: 'CHANNEL',
                name: 'channel',
                description: 'When bot should send all role-play messages',
                channelTypes: ['GUILD_TEXT'],
              },
            ],
          },
          {
            type: 'SUB_COMMAND',
            name: 'reset',
            description: 'Reset the channel to default (none)',
          },
        ],
      },
    ],
  },
];
