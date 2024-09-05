# BerlingoBot - horrible but useful Discord bot

## Instance setup
- Install npm dependencies: `npm install`
- Create New Application in [Discord Developer Portal](https://discord.com/developers/applications/)
- Rename `config.json.example` to `config.json`
    - fill in applicationId with value from "Settings -> General Information" tab
    - fill in botToken with value from "Settings -> Bot" tab
    - fill in serverId as described in [discord.js Guide](https://discordjs.guide/creating-your-bot/command-deployment.html)
- [Add the bot to your server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html) with "applications.commands" and "bot" permissions
- Deploy commands: `node deploy-commands.js`
- Run the bot: `npx nodemon`

## Running as systemd service
- Copy `berlingobot.service` file to `/etc/systemd/system/`
- Edit the file to fill in missing values
- `sudo systemctl daemon-reload`
- `sudo systemctl enable berlingobot`
