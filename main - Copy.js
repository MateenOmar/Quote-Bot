const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const { cpuUsage } = require('process');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot Ready');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'motivational' || command) {
        client.commands.get('motivational').execute(message, args);
    }
    else if (command === 'inspirational') {
        client.commands.get('inspirational').execute(message, args);
    }

})


client.login('ODYyODEzODg3NDQ2Nzc3OTA3.YOd0DQ.uEYobdnFs48dhUTLdMvAdzD0BiY');