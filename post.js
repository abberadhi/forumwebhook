const fetch = require("node-fetch");
var theUrl = "<link>";

function sendpost(data) {
    fetch(theUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    }).catch((error) => {
    console.error('Error:', error);
    });
}

module.exports = sendpost;

