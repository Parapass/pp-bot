const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const reactions = require('./reactions.js');
const removeroles = require('./roles.js');
const PREFIX = "-"
client.on("ready", () => {
  console.log('Bot is running with "+client.users.size+" users, in  "+client.channels.size+" channels of "+client.guilds.size+" guilds! 👍')
})
//on leaving message
client.on('guildMemberRemove', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "new-peeps");
    if(!channel) return;

    channel.send(`**${member}** has just left the server.. Bye Bye`);
    var leavingEmbed = new Discord.MessageEmbed()
        leavingEmbed.setColor('#0099ff')
        leavingEmbed.setAuthor('PepeLa.')
        leavingEmbed.setTitle('Why must you leave, now we do the PepeLa!')
        leavingEmbed.setImage(member.user.displayAvatarURL())
        leavingEmbed.setThumbnail('https://cdn.discordapp.com/emojis/727552232446230578.png?v=1')
    channel.send(leavingEmbed);
});
client.login(process.env.BOT_TOKEN)
