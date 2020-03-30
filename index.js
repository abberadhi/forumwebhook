const constructMessage = require("./messageconstructor.js");
const sendpost = require("./post.js");
const irc = require("./irccon.js");
const getDate = require("./getdate.js")
const errorMessage = require("./errormsg.json")
const fs = require('fs');


irc.addListener('message', function (from, to, message) {
    if (message.slice(0, 9) == 'Forumet "' && from == "marvin") {
        fs.appendFileSync("log.txt", "<" + getDate() + ">: " + message + "\n");

        try {
            message = message.split('" av ');

            sendpost(constructMessage(
                message[0].slice(9).split(" • ").slice(1).join(" • "), // title
                message[message.length-1].split(" ").pop(), // link
                message[message.length-1].split(" ").slice(0, -1).join(" "), // user
                message[0].slice(9).split(" • ")[0] // category
            ));
        } catch(error) {
            sendpost(errorMessage);
            fs.appendFileSync("log.txt", "Drew error^: " + error + "\n");
        }
    }
});
