'use strict'

const { MessageEmbed, Message } = require('discord.js');
const Commando = require('discord.js-commando')

module.exports = class help extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'help',
      group: 'help',
      memberName: 'help',
      description: 'Displays helpful bot information',
    });
  }

  run(msg) {

    const embed = new MessageEmbed()
    .setTitle('Help')
    .setColor('RED')
    .setDescription('Bot Commands are:')

    msg.channel.send(embed)

    return
  }
};