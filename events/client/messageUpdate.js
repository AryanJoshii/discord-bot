module.exports = (Discord, client, oldMessage, newMessage) => {

  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${oldMessage.author.tag}`, oldMessage.author.avatarURL({dynamic: true}))
  .setDescription(`Message edited by ${oldMessage.author.tag} in <#${oldMessage.channel.id}> **[Jump to the message](${newMessage.url})**`)
  .addField("Original message:",oldMessage.content,true)
  .addField("Edited message:",newMessage.content,true)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};