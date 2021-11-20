const Settings = require('../../Schemas/Settings');
const commandsData = require('../../Utils/interactions');
const localization = require('../../Utils/localization');

module.exports = {
  run: async (interaction) => {
    const member = interaction.options.getMember('member'),
      words = interaction.options.getString('words');

    const commandData = commandsData.find(
      (command) => command.name === interaction.commandName
    );

    const settings = await Settings.findOne({
      _id: interaction.guild.id,
    });

    const locale = settings?.locale || 'en';

    if (!member && commandData.member) {
      return interaction.reply({
        content: localization.errors.memberRequired[locale],
        ephemeral: true,
      });
    }

    if (member?.id === interaction.user.id) {
      return interaction.reply({
        content: localization.errors.rolePlayeWithYourself[locale],
        ephemeral: true,
      });
    }

    if (member?.user.bot) {
      return interaction.reply({
        content: localization.errors.rolePlayeWithBot[locale],
        ephemeral: true,
      });
    }

    const gifs = await interaction.client.tenor.Search.Query(
      `anime ${interaction.commandName}`,
      '50'
    );
    const gif = gifs[Math.floor(Math.random() * gifs.length)].media[0].gif.url;

    let channel = interaction.channel;

    if (settings?.rolePlayChannelID) {
      const channelId = settings.rolePlayChannelID;
      channel = interaction.guild.channels.cache.get(channelId);
    }

    if (
      !(
        channel
          .permissionsFor(interaction.client.user.id)
          .has('VIEW_CHANNEL') &&
        channel.permissionsFor(interaction.client.user.id).has('SEND_MESSAGE')
      )
    ) {
      return interaction.reply({
        content: localization.errors.cannotSendMessages[locale],
        ephemeral: true,
      });
    }

    const splittedLocales = commandData.locales[locale].split(' ');

    let content = `${interaction.member} ${splittedLocales[0]}`;
    if (member) {
      splittedLocales[1]
        ? (content += ` ${splittedLocales[1]} ${member}`)
        : (content += ` ${member}`);
    }

    if (words) {
      content += `\n\n${words}`;
    }

    channel.send({
      content,
      files: [gif],
    });
    interaction.reply({
      content: `**${localization.rolePlayComplete[locale]}**`,
      ephemeral: true,
    });
  },
};
