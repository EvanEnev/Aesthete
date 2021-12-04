const emojiRegex = require('emoji-regex');
const localization = require('../../../Utils/localization');
module.exports = async (interaction, locale, role, message) => {
  let components = message.components;
  const row = message.components.find((row) =>
    row.components[0].options.find((option) => option.value === role.id)
  );

  if (!row) {
    return interaction.reply({
      content: localization.errors.messageWithNoSelectRoles[locale],
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

  const options = row.components[0].options.filter(
    (option) => option.value !== role.id
  );

  if (row.components[0].options.length - 1 > 0) {
    row.components[0].setOptions(options).setMaxValues(options.length);
    components[components.indexOf(row)] = row;
  } else {
    components = [];
  }

  await message.edit({ components });
  interaction.reply({
    content: localization.selectRoles.roleRemoved[locale],
    ephemeral: true,
  });
};
