let messageobj = {
    "username": "dbwebb-forum",
    "avatar_url": "https://sstatic.se/image/theme/leaf_256x256.png",
    "embeds": [
        {
            "title": null,
            "url": null,
            "color": 6921239, // leaf green
            "author": {
            "name": "Nytt i forumet -",
            },
            "fields": [
                {
                    "name": "Användare",
                    "value": null,
                    "inline": true
                },
                {
                    "name": "Kategori(er)",
                    "value": null,
                    "inline": true
                }
            ],
            "thumbnail": {
                "url": "https://sstatic.se/image/theme/leaf_256x256.png"
            },
            "footer": {
                "text": "dbwebb.se/forum"
            }
        }
    ]
}

/**
 * construct message by changing messageobj accoring to input
 * @param {String} title title of embed
 * @param {String} url link for thread
 * @param {String} user name of the poster
 * @param {String} category what category thread belongs to
 * @returns {object} message object
 */
function constructMessage(title, url, user, category) {
    messageobj.embeds[0].title = title;
    messageobj.embeds[0].url = url;
    messageobj.embeds[0].fields[0].value = "**" + user + "**"; // ** sets name to bold
    messageobj.embeds[0].fields[1].value = category;

    return messageobj;
}

module.exports = constructMessage;

