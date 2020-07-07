  
const Discord = require('discord.js');
const color = require('.././EmbedColor');

module.exports.run = async(bot, message, args, db) =>{
    db.collection('Core').find().toArray((err,res) =>{
        let embed = new Discord.RichEmbed()
        .setAuthor(`About Prime`,bot.user.avatarURL)
        .setColor(color.set("blue"))
        .setDescription
        (`Moderation and utility bot made by Stormy#2829`);

        message.channel.send(embed);
    });
}
module.exports.help = {
	name:"about"
}
