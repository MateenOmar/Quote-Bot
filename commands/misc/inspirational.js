'use strict'

const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class inspirational extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'quote',
            group: 'misc',
            memberName: 'quote',
            description: 'Quote based on the passed argument',
            argsType: 'single'
        })
    }

    run = async (msg, args) => {
        axios
            .get(`https://zenquotes.io/api/random/${args}`)
            .then((res) => {
                console.log('Res: ', res.data[0])
                msg.say(res.data[0].q + ' - ' + res.data[0].a)
            })
            .catch((err) => {
                console.error('Err: ', err)
            })

    }

}