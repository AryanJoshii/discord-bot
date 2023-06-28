module.exports = {
  name: "help",
  description: "shows bot commands",
  execute(client, message, args, Discord){
    
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Commands")
.setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: false}))
.addField("Fun", "`ping,` `youtube,` `weather,` `calculator`")
.setTimestamp();
message.channel.send(embed);
  }
};