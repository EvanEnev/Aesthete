module.exports = [
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
];
