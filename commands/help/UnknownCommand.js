'use strict'

const Commando = require('discord.js-commando')

module.exports = class UnknownCommandCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'unknown-command',
      group: 'help',
      memberName: 'unknown-command',
      description: 'Displays help information for when an unknown command is used',
      unknown: true,
      hidden: true
    });
  }

  run(msg) {
    return msg.reply(
      `Unknown command. Use ${msg.anyUsage(
                'help',
                msg.guild ? undefined : null,
                msg.guild ? undefined : null
            )} to view the command list.`
    );
  }
};