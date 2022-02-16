module.exports = [
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
];
