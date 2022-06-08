const localization = require('../../../Utils/localization');
const Members = require('../../../Schemas/Members');
const { Util } = require('discord.js');
const Settings = require('../../../Schemas/Settings');
const checkInteractionUser = require('../../Functions/checkInteractionUser');

module.exports = {
  name: 'marryAccept',
  run: async (interaction, locale) => {
    if (!checkInteractionUser(interaction, 1, locale)) {
      return;
    }

    const usersIDs = Util.discordSort(interaction.message.mentions.users);
    const member = await interaction.guild.members.fetch(usersIDs.last());

    const memberData = await Members.findOne({
        id: interaction.user.id,
        guildID: interaction.guild.id,
      }),
      secondMemberData = await Members.findOne({
        id: member.id,
        guildID: interaction.guild.id,
      });

    if (memberData?.marriage) {
      return interaction.reply({
        content: localization.marriages.youAlredyMarried[
          locale.ephemeral
        ].replace('{member}', `${member}`),
        ephemeral: true,
      });
    }

    if (secondMemberData?.marriage) {
      return interaction.reply({
        content: localization.memberAlreadyMarried[locale].replace(
          '{member}',
          `${member}`
        ),
        ephemeral: true,
      });
    }

    const gifs = await interaction.client.tenor.Search.Query(
      'anime marry',
      '50'
    );

    const gif = gifs[Math.floor(Math.random() * gifs.length)].media[0].gif.url;

    const settings = await Settings.findOne({ _id: interaction.guild.id });

    const channel = await interaction.guild.channels.fetch(
      settings?.weddingsChannel
    );

    if (typeof channel !== 'object') {
      channel
        .send({
          content: localization.marriages.marryAcceptChannel[locale.normal]
            .replace('{firstUser}', interaction.member)
            .replace('{secondUser}', member),
          files: [gif],
        })
        .then(async (message) => {
          await message.react('🎉');
        });
    }

    if (interaction.channel.type === 'dm') {
      interaction.reply({
        content: localization.marriages.marryAcceptMember[locale.ephemeral],
      });
    } else {
      interaction.reply({
        content: localization.marriages.marryAcceptMember[locale.normal],
      });
    }
    await Members.findOneAndUpdate(
      {
        id: interaction.user.id,
        guildID: interaction.guild.id,
      },
      { marriage: member.id },
      { upsert: true }
    );

    await Members.findOneAndUpdate(
      {
        id: member.id,
        guildID: interaction.guild.id,
      },
      { marriage: interaction.user.id },
      { upsert: true }
    );

    await interaction.message.edit({ components: [] });
  },
};
