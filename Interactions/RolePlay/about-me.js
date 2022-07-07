const localization = require('../../Utils/localization');
const Members = require('../../Schemas/Members');

module.exports = {
  name: 'about-me',
  run: async (interaction, locale) => {
    const info = interaction.options.getString('info');
    await Members.findOneAndUpdate(
      {
        id: interaction.user.id,
        guildID: interaction.guild.id,
      },
      { id: interaction.user.id, guildID: interaction.guild.id, about: info },
      { upsert: true }
    );

    interaction.reply({
      content: localization.infoChanged[locale],
      ephemeral: true,
    });
  },
};
