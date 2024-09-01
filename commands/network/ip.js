const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Resolve public IP address'),
	async execute(interaction) {
        fetch(new Request("https://ifconfig.me", {
            headers: new Headers({
                "User-Agent": "curl/8.7.1"
            })
        }))
            .then((response) => response.text())
            .then((text) => {
                interaction.reply(`Public IP: ${text}`);
            })
            .catch((error) => {
                console.error(error);
                interaction.reply(`Error: ${error.message}`);
            });
	},
};
