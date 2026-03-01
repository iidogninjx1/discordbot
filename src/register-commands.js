const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
    name: 'trap',
    description: 'hehe funny',

    }
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


(async () => {
try{
console.log('commands registering...');

    await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands },
);
console.log('commands registered');
} catch (error){
    console.error(error);
}
})();