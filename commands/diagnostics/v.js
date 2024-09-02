const { SlashCommandBuilder } = require('discord.js');
const simpleGit = require('simple-git');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('v')
		.setDescription('Bot version'),
	async execute(interaction) {
        const lastCommitSummary = await simpleGit().show('--summary')
		await interaction.reply(`${lastCommitSummary}`);
	},
};
