const Discord = require('discord.js');

module.exports = {
  name: "youtube",
  aliases: ["yt"],
  description:"send youtube link",
  execute(client, message) {
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail('https://media.discordapp.net/attachments/831444619031216141/861936491001282560/youtube-logo-png-46031.png')
    .addField("TheObsty", "[Click here!!](https://www.youtube.com/channel/UCDbZ5XUQ3V5RRyIXo1krWvA)")
    .setTimestamp();
    message.channel.send(embed);
  }
};