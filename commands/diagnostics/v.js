const { SlashCommandBuilder } = require('discord.js');
const simpleGit = require('simple-git');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('v')
		.setDescription('Bot version'),
	async execute(interaction) {
        const lastCommitHash = await simpleGit().show(['--format=%H', '--summary'])
		simpleGit().listRemote(['--get-url'], (err, data) => {
			if (!err) {
				console.log(data);
				interaction.reply(`${data.trim()}/commit/${lastCommitHash}`);
			} else {
				console.error(err)
				interaction.reply(`${lastCommitHash}`);
			}
		 });
	},
};
