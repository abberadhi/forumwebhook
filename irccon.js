var irc = require('irc');

var bot = new irc.Client('irc.bsnet.se','abbesNode', {
    channels: ["#db-o-webb"],
    port: 6667,
    debug: true,
    userName: 'clone',
    realName: 'clone',
    showErrors: true,
    autoRejoin: true,
    autoConnect: true,
});

module.exports = bot;