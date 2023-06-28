module.exports = {
  name: "invite",
  description: "bot invite link",
  execute(client, message, args, Discord){

const embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .addField("Planet Utilities Bot", "[Invite me !!](https://discord.com/api/oauth2/authorize?client_id=857202484895285269&permissions=8&scope=bot)")
    .setTimestamp();
    message.channel.send(embed);
  }
};