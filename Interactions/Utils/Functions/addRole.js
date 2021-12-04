const emojiRegex = require('emoji-regex');
const localization = require('../../../Utils/localization');
module.exports = async (interaction, locale, role, message) => {
  const label = interaction.options.getString('label'),
    emoji = interaction.options.getString('emoji')?.split(/ +/g)[0],
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

  if (row.components[0].options.length + 1 > 25) {
    return interaction.reply({
      content: localization.errors.tooManyRoles[locale],
      ephemeral: true,
    });
  }

  if (!label) {
    return interaction.reply({
      content: localization.errors.noLabel[locale],
      ephemeral: true,
    });
  }

  if (!newRole) {
    return interaction.reply({
      content: localization.errors.noNewRole[locale],
      ephemeral: true,
    });
  }

  if (
    message.components.find((row) =>
      row.components[0].options.find((option) => option.value === newRole.id)
    )
  ) {
    return interaction.reply({
      content: localization.errors.roleAlreadyAdded[locale],
      ephemeral: true,
    });
  }

  if (
    emoji &&
    (emoji.startsWith('<a:') ||
      emoji.startsWith('<:') ||
      emojiRegex().test(emoji))
  ) {
    row.components[0].addOptions({ label, value: newRole.id, emoji });
  } else {
    row.components[0].addOptions({ label, value: newRole.id });
  }

  components[components.indexOf(row)] = row;
  await message.edit({ components });
  interaction.reply({
    content: localization.selectRoles.roleAdded[locale],
    ephemeral: true,
  });
};
