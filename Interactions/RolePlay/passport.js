const localization = require('../../Utils/localization');
const { MessageEmbed } = require('discord.js');
const { colors } = require('../../Utils/config.js');
const Members = require('../../Schemas/Members');

module.exports = {
  name: 'passport',
  run: async (interaction, locale) => {
    const member =
      interaction.options.getMember('member') || interaction.member;

    const info =
      (
        await Members.findOne({
          id: member.id,
          guildID: interaction.guild.id,
        })
      ).about || localization.infoCommand[locale.ephemeral];

    await member.user.fetch();
    const color =
      member.displayHexColor === '#000000'
        ? member.user.hexAccentColor || colors.default
        : member.displayHexColor;

    let fields = localization.embeds.passport.fields[locale.ephemeral];
    fields.forEach((field) => {
      field.value = field.value
        .replaceAll(
          '{created}',
          Math.floor(member.user.createdTimestamp / 1000)
        )
        .replaceAll('{joined}', Math.floor(member.joinedTimestamp / 1000))
        .replaceAll('{about}', info);
    });

    const embed = new MessageEmbed()
      .setTitle(
        localization.embeds.passport.title[locale.ephemeral].replaceAll(
          '{member}',
          member.displayName
        )
      )
      .setColor(color)
      .setThumbnail(member.displayAvatarURL({ dynamic: true }))
      .addFields(fields);

    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
