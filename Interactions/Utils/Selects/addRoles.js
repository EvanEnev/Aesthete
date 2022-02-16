const localization = require('../../../Utils/localization');
module.exports = {
  name: 'addRoles',
  run: async (interaction, locale) => {
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
        const channel =
          interaction.guild.publicUpdatesChannel ||
          guild.channels.cache
            .filter(
              (channel) =>
                channel
                  .permissionsFor(interaction.client.user.id)
                  .has('SEND_MESSAGES') &&
                channel
                  .permissionsFor(interaction.client.user.id)
                  .has('VIEW_CHANNEL') &&
                channel.type === 'GUILD_TEXT'
            )
            .sort((a, b) => a - b)
            .first();

        channel.send({
          content: localization.errors.noPermissionsForSelectroles[locale],
        });
      }
      await interaction.deferUpdate().catch(() => {});
    });
  },
};
