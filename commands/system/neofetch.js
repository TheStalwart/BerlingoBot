const { SlashCommandBuilder } = require("discord.js");
const { exec } = require("child_process");
const which = require("which");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("neofetch")
    .setDescription("Run neofetch"),
  async execute(interaction) {
    await interaction.deferReply();

    const fetchCommands = ["neofetch --stdout", "winfetch -ascii -stripansi"];
    let validCommand = null;

    for (commandLine of fetchCommands) {
      const whichResult = await which(commandLine.split(" ")[0], {
        nothrow: true,
      });

      if (whichResult) {
        validCommand = commandLine;
        break;
      }
    }

    if (!validCommand) {
      await interaction.editReply(`Error: no fetch scripts installed`);
      return;
    }

    exec(validCommand, async (error, stdout, stderr) => {
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
