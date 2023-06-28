module.exports = async(Discord, client, message) => {
  
const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
const deletionLog = fetchedLogs.entries.first();	
const { executor, target } = deletionLog;
  
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setDescription(`A message deleted by ${executor.tag} in <#${message.channel.id}>\n\n**${message.content.replace(/`/g, "'")}**\n_ _`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed)
  
}