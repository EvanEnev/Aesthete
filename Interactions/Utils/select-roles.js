const Settings = require('../../Schemas/Settings'),
  createSelectRoles = require('./Functions/createSelectRoles'),
  removeSelectRoles = require('./Functions/removeSelectRoles'),
  editSelectRoles = require('./Functions/editSelectRoles');
const localization = require('../../Utils/localization');
const editMessage = require('./Functions/editMessage');

module.exports = {
  name: 'select-roles',
  run: async (interaction) => {
    const settings = await Settings.findOne({
      _id: interaction.guild.id,
    });

    const locale = settings?.locale || 'en';

    if (
      !(
        interaction.member.permissions.has('ADMINISTRATOR') ||
        interaction.member.permissions.has('MANAGE_GUILD')
      )
    )
      return interaction.reply({
        content:
          localization.missingPermissions[locale] +
          localization.permissions.manageGuild[locale],
        ephemeral: true,
      });

    switch (interaction.options.getSubcommand()) {
      case 'create':
        createSelectRoles(interaction, locale);
        break;
      case 'edit':
        editSelectRoles(interaction, locale);
        break;
      case 'edit-message':
        editMessage(interaction, locale);
        break;
      case 'remove':
        removeSelectRoles(interaction, locale);
        break;
    }
  },
};
