const constructMessage = require("./messageconstructor.js");
const xmlhttp = require("./xmlhttp.js");
const irc = require("./irccon.js");
const getDate = require("./getdate.js")
const errorMessage = require("./errormsg.json")
const fs = require('fs');

irc.addListener('message', function (from, to, message) {
    if (message.slice(0, 9) == 'Forumet "' && from == "marvin") {
        fs.appendFileSync("log.txt", "\n<" + getDate() + "> " + message);

        try {
            message = message.split('" av ');

            xmlhttp.send(JSON.stringify(constructMessage(
                message[0].slice(9).split(" • ").slice(1), // title
                message[message.length-1].split(" ").pop(), // link
                message[message.length-1].split(" ").slice(0, -1).join(" "), // user
                message[0].slice(9).split(" • ")[0] // category
                )));
        } catch(error) {
            xmlhttp.send(JSON.stringify(errorMessage));
            fs.appendFileSync("log.txt", "\nDrew error^: " + error);
        }
    }
});
