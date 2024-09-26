const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('child_process');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('neofetch')
		.setDescription('Run neofetch'),
	async execute(interaction) {
        await interaction.deferReply();
        exec('neofetch --stdout', async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            await interaction.editReply(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            await interaction.editReply(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
        await interaction.editReply(`\`\`\`\n${stdout}\`\`\``);
        });
	},
};
