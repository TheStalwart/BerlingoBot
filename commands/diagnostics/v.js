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
				var commitURL = data.trim() // strip newline at the end of git command output
				commitURL = commitURL.replace('git@github.com:', 'https://github.com/') // convert SSH remote URL to HTTPS URL
				let indexOfSuffix = commitURL.lastIndexOf('.git')
				if (indexOfSuffix > 0) { // SSH remote URLs have ".git" suffix we need to strip for HTTPS URL
					commitURL = commitURL.substring(0, commitURL.lastIndexOf('.git'))
				}
				interaction.reply(`${commitURL}/commit/${lastCommitHash}`);
			} else {
				console.error(err)
				interaction.reply(`${lastCommitHash}`);
			}
		 });
	},
};
