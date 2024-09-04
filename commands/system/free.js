const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('child_process');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('free')
		.setDescription('Amount of free and used memory in the system'),
	async execute(interaction) {
        exec('free -h', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            interaction.reply(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            interaction.reply(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
        interaction.reply(`\`\`\`\n${stdout}\`\`\``);
        });
	},
};
