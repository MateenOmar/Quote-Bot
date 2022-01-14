module.exports = {
    name: 'motivational',
    description: 'these are motivational quotes',
    execute(message, args) {
        message.channel.send('motivate');
    }
}