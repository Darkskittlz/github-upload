const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
var version = '1.0.2';




bot.on('ready', () => {
    console.log('Updated DarkskittlzBot, This bot is online!');
})



bot.on('message', message => {



    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();



    if (message.content === `${prefix}ping`){
        message.channel.send('Pong.');
    } else 
    if (message.content === `${prefix}version`){
        message.channel.send('BOT_Version 1.0.1.');
    }else 
    if (message.content === `${prefix}info`){ 
        message.channel.send("This is the DarkskittlzBot! I am adding more and more commands, so let me know if there's anything you'd be interested in seeing!");
    }else
    if (message.content === `${prefix}server`){
        message.channel.send(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nVersion: ${version}`);    
    }else
    if (message.content === `${prefix}test`){
        message.channel.send(`Testing, Testing, testing 1 2 3...`);
    }else
    if (message.content === `${prefix}clear`){
    }const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('you need to input a number between 1 and 99.');
    }

    message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error trying to prune messages in this channel!');
    });
});   









/*
bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split("");

    switch (args[0]){
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'website':
            message.channel.send('darkskittles.com')
            break;
        case 'info':
            if (args[0] === 'info') {
                message.channel.send("This is the DarkskittlzBot! I am adding more and more commands, so let me know if there's anything you'd be interested in seeing!");
            }
            if (args[1] === 'version') {
                message.channel.send('Bot_version ' + version);
            } else {
                message.channel.send('')
            }
            break;
    }
})
*/ 

bot.login(token);




