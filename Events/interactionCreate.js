const commandsData = require('../Utils/interactions')
const Settings = require('../Schemas/Settings')
module.exports = {
  name: 'interactionCreate',
  async run(interaction, client) {
    if (!(interaction.guild || interaction.guild.available)) return
    let property

    if (interaction.isButton()) {
      property = 'buttons'
    } else if (interaction.isSelectMenu()) {
      property = 'selects'
    } else if (interaction.isCommand()) {
      property = 'interactions'
    } else if (interaction.isContextMenu()) {
      property = 'contexts'
    } else if (interaction.isAutocomplete()) {
      property = 'autocompletes'
    }

    const settings = await Settings.findOne({
      _id: interaction.guild.id,
    })

    const localeHandler = (localeName) => {
      const setLocale = () => {
        let localeValue
        const locale = (
          interaction[localeName]?.includes('-')
            ? interaction[localeName]?.slice(0, -3)
            : interaction[localeName]
        ).toLowerCase()

        if (localeName === 'locale') {
          localeValue = ['ru', 'en'].includes(locale)
            ? locale
            : settings?.locale
        } else {
          localeValue = settings?.locale || locale
        }
        return localeValue
      }

      return ['ru', 'en'].includes(setLocale()) ? setLocale() : 'en'
    }

    const locale = {
      normal: localeHandler('guildLocale'),
      ephemeral: localeHandler('locale'),
    }

    if (property === 'interactions') {
      if (client.user.id !== '912631976282976287') {
        client.statcord.postCommand(
          interaction.commandName,
          interaction.user.id
        )
      }

      const commandData = commandsData.find(
        (data) => data.name === interaction.commandName
      )

      if (commandData?.category === 'roleplay') {
        const file = require('../Interactions/RolePlay/index')
        return file.run(interaction, locale)
      }
    }

    const action = client[property]?.get(
      interaction.commandName || interaction.customId
    )

    if (!action) return

    action.run(interaction, locale)
  },
}
