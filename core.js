const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "-"
client.on("ready", () => {
  console.log('Bot is running with "+client.users.size+" users, in  "+client.channels.size+" channels of "+client.guilds.size+" guilds! 👍')
})
// greeting command.
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`Hello ${member}!`)
    var greetingEmbed = new Discord.MessageEmbed()
        greetingEmbed.setColor('##ffe100')
        greetingEmbed.setAuthor('Hello!')
        greetingEmbed.setTitle('Welcome! Be sure to read <#775164569437077524> and <#775165374210768976>')
        greetingEmbed.setImage(member.user.displayAvatarURL())
        greetingEmbed.setThumbnail("https://cdn.discordapp.com/emojis/733509059168174190.gif?v=1")
    channel.send(greetingEmbed);
});
//on leaving message
client.on('guildMemberRemove', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`**${member}** has just left the server.. Bye Bye`);
    var leavingEmbed = new Discord.MessageEmbed()
        leavingEmbed.setColor('#0099ff')
        leavingEmbed.setAuthor('Cya.')
        leavingEmbed.setTitle('Thanks for stopping by!')
        leavingEmbed.setImage(member.user.displayAvatarURL())
        leavingEmbed.setThumbnail('https://cdn.discordapp.com/emojis/785455324768632832.gif?v=1')
    channel.send(leavingEmbed);
});
client.login(process.env.BOT_TOKEN)
