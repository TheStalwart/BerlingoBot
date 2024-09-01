# BerlingoBot - horrible but useful Discord bot

## Instance setup
- Install npm dependencies: `npm install`
- Create New Application in [Discord Developer Portal](https://discord.com/developers/applications/)
- Rename `config.json.example` to `config.json`
    - fill in a token created in previous step
    - fill in clientId and guildId as described in [discord.js Guide](https://discordjs.guide/creating-your-bot/command-deployment.html)
- Deploy commands: `node deploy-commands.js`
- Run the bot: `npx nodemon`
- [Add the bot to your server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html) with "applications.commands", "bot" and "Send Messages" permissions: 
