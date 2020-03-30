# dbwebb forum bot for Discord
This is a Discordapp Webhook that posts new threads in the [dbwebb forum](https://dbwebb.se/forum) to the Discord server. It uses the already existing forum bot Marvin, that is used in the [IRC chat](https://dbwebb.se/irc).

Example of output -

![Example](https://cdn.discordapp.com/attachments/128669193254993920/693908124532211742/unknown.png "Example of how discord message looks.")

## How it works
It is constantly connected to the IRC server, checking for new posts. Upon detecting a new forum post, the message is formatted and posted in the Discord server.

## Dependencies
```
"irc": "^0.5.2",
"node-fetch": "^2.6.0",
```

## Contributing
All contributors are welcome. If you wish to work on something with the intention of having it included in the working instance, please open an issue for discussion.

If you have an issue with how the code is structured or with the libraries I am using, *do* bring it up. Feedback is appreciated.
