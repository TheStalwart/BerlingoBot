const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('child_process');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('df')
		.setDescription('Report file system disk space usage'),
	async execute(interaction) {
        exec('df -h', (error, stdout, stderr) => {
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
