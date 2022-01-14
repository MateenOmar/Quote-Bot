'use strict'

//require('module-alias/register')

const path = require('path')
const Commando = require('discord.js-commando')

//const config = require('@root/config.json')
//const { loadLanguages } = require('@util/language')
//const loadCommands = require('@root/commands/load-commands')
//const loadFeatures = require('@root/features/loead-features')
//const modLogs = require('@features/mod-logs')

const client = new Commando.CommandoClient({
    owner: '224404322874687489',
    commandPrefix: '-'
})

client.on('ready', async () => {
    console.log('Bot Ready')
    
    client.registry
        .registerGroups([
            ['misc', 'misc Commands'],
            ['help', 'helper Commands'],
        ])
        .registerDefaultTypes()
        .registerDefaultGroups()
        .registerDefaultCommands({
            unknownCommand: false,
            eval: false,
            help: false
        })
        .registerCommandsIn(path.join(__dirname , 'commands'))

    //loadLanguages(client)
    //commandBase.loadPrefixes(client)
    //loadCommands(client)
    //loadFeatures(client)

    //modLogs(client)
})


client.login('ODYyODEzODg3NDQ2Nzc3OTA3.YOd0DQ.uEYobdnFs48dhUTLdMvAdzD0BiY')