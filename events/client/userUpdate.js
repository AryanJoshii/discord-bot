module.exports = (Discord, client, oldUser, newUser) => {
  
if(oldUser.username !== newUser.username){  
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${newUser.username}#${newUser.discriminator}`, newUser.avatarURL({dynamic: true}))
  .setTitle(`Username Changed!`)
  .addField("Before", `${oldUser.username}#${oldUser.discriminator}`)
  .addField("After", `${newUser.username}#${newUser.discriminator}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
}

};