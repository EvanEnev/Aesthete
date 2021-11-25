const Settings = require('../../../Schemas/Settings');

const localization = require('../../../Utils/localization');
module.exports = {
  name: 'addRoles',
  run: async (interaction) => {
    const settings = await Settings.findOne({
      _id: interaction.guild.id,
    });

    const locale = settings?.locale || 'en';
    const roles = interaction.message.components[0].components[0].options.map(
        (option) => option.value
      ),
      input = interaction.values;

    let error = false;
    roles.forEach(async (roleID) => {
      if (input.includes(roleID)) {
        await interaction.member.roles.add(roleID).catch(() => {
          error = true;
        });
      } else {
        await interaction.member.roles.remove(roleID).catch(() => {
          error = true;
        });
      }

      if (error) {
        interaction.guild.publicUpdatesChannel.send({
          content: localization.errors.noPermissionsForSelectroles[locale],
        });
      }
      await interaction.deferUpdate();
    });
  },
};
