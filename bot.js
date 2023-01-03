// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// const { trigger_words } = require(`./trigger-words.json`);

client.on('message', message => {
    if (message.content === '!tavernier salut') {
        // Get the user's nickname
        let nickname = message.member.nickname;
        if (nickname === null) {
            // If the user doesn't have a nickname, use their username
            nickname = message.author.username;
        }
        // Send the greeting message with the user's nickname
        message.channel.send(`Salut, ${nickname}! Bienvenue à la Taverne!`);
    }
});

client.login(process.env.DISCORD_TOKEN);
