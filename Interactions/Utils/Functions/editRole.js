const emojiRegex = require('emoji-regex');
const localization = require('../../../Utils/localization');
module.exports = async (interaction, locale, role, message) => {
  const label = interaction.options.getString('label'),
    rawEmoji = interaction.options.getString('emoji')?.split(/ +/g)[0],
    newRole = interaction.options.getRole('new-role');

  const components = message.components;
  const row = message.components.find((row) =>
    row.components[0].options.find((option) => option.value === role.id)
  );

  if (!row) {
    return interaction.reply({
      content: localization.errors.messageWithNoSelectRoles[locale],
      ephemeral: true,
    });
  }
  if (!(label || emoji || newRole)) {
    return interaction.reply({
      content: localization.errors.noOptions[locale],
      ephemeral: true,
    });
  }

  if (
    !message.components.find((row) =>
      row.components[0].options.find((option) => option.value === role.id)
    )
  ) {
    return interaction.reply({
      content: localization.errors.noRoleInMenu[locale],
      ephemeral: true,
    });
  }

  const options = row.components[0].options;

  let option = row.components[0].options.find(
    (option) => option.value === role.id
  );

  const index = options.indexOf(option);

  if (label) {
    option.label = label;
  }

  if (newRole) {
    option.value = newRole.id;
  }

  if (rawEmoji) {
    if (rawEmoji.startsWith('<a:')) {
      const withoutArrows = rawEmoji.slice(3, -1);
      const splitted = withoutArrows.split(':');
      option.emoji = { id: splitted[1], name: splitted[0], animated: true };
    } else if (rawEmoji.startsWith('<:')) {
      const withoutArrows = rawEmoji.slice(2, -1);
      const splitted = withoutArrows.split(':');
      option.emoji = { id: splitted[1], name: splitted[0], animated: false };
    } else if (emojiRegex().test(rawEmoji)) {
      option.emoji = { id: null, name: rawEmoji };
    }
  }

  options[index] = option;
  row.components[0].setOptions(options).setMaxValues(options.length);
  components[components.indexOf(row)] = row;

  await message.edit({ components });
  interaction.reply({
    content: localization.selectRoles.roleChanged[locale],
    ephemeral: true,
  });
};
