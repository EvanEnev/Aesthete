const localization = require('../../../Utils/localization');
const Members = require('../../../Schemas/Members');
const { Util } = require('discord.js');
const Settings = require('../../../Schemas/Settings');
const checkInteractionUser = require('../../Functions/checkInteractionUser');

module.exports = {
  name: 'divorceAccept',
  run: async (interaction, locale) => {
    if (!checkInteractionUser(interaction, 1, locale)) {
      return;
    }
    const usersIDs = Util.discordSort(interaction.message.mentions.users);
    const member = await interaction.guild.members.fetch(usersIDs.last());

    const gifs = await interaction.client.tenor.Search.Query(
      'anime divorce',
      '50'
    );

    const gif = gifs[Math.floor(Math.random() * gifs.length)].media[0].gif.url;

    const settings = await Settings.findOne({ _id: interaction.guild.id });

    const channel = await interaction.guild.channels.fetch(
      settings?.weddingsChannel
    );

    if (typeof channel !== 'object') {
      channel.send({
        content: localization.marriages.divorceAcceptChannel[locale.normal]
          .replace('{firstUser}', interaction.member)
          .replace('{secondUser}', member),
        files: [gif],
      });
    }

    if (interaction.channel.type === 'dm') {
      interaction.reply({
        content: localization.marriages.divorceAcceptMember[locale.ephemeral],
      });
    } else {
      interaction.reply({
        content: localization.marriages.divorceAcceptMember[locale.normal],
      });
    }
    await Members.findOneAndUpdate(
      {
        id: interaction.user.id,
        guildID: interaction.guild.id,
      },
      { $unset: { marriage: '' } },
      { upsert: true }
    );

    await Members.findOneAndUpdate(
      {
        id: member.id,
        guildID: interaction.guild.id,
      },
      { $unset: { marriage: '' } },
      { upsert: true }
    );

    await interaction.message.edit({ components: [] });
  },
};
