// packages
require('dotenv').config();
const { Client, IntentsBitField, SlashCommandBuilder } = require('discord.js');
// create a new client instance and sets the intents
const client = new Client({
  intents  : [
  IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
]
// bot responses to events
})
client.on('clientReady', (c) => {
  console.log(`Logged in as ${c.user.tag}!`);
  
});
client.on('messageCreate', (message) => {
  console.log(`${message.author.tag}: ${message.content}`);
  if(message.author.tag !== client.user.tag && message.content === "ok"){
    message.reply("ok");
  }
  else if(message.author.tag !== client.user.tag && message.content === "clanker"){
    message.reply("chud");
  }
});

client.on('interactionCreate',  (interaction) => {
if (!interaction.isChatInputCommand()) return;

if(interaction.commandName === 'trap') {
  interaction.reply('https://www.youtube.com/watch?v=MfxNZDAU1TE');
}
});












// token WARNING
client.login(process.env.TOKEN);