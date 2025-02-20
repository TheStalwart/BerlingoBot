const { SlashCommandBuilder } = require("discord.js");
const { exec } = require("child_process");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("speedtest")
    .setDescription("Run speedtest-cli"),
  async execute(interaction) {
    await interaction.deferReply();
    exec("speedtest-cli --simple --share", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        interaction.editReply(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        interaction.editReply(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);
      interaction.editReply(`${stdout}`);
    });
  },
};
