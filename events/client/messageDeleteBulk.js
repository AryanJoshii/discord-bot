module.exports = async(Discord, client, messages) => {
  
const fetchedLogs = await messages.first().guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_BULK_DELETE',
	});
const deletionLog = fetchedLogs.entries.first();	
const { executor, target } = deletionLog;
  
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setDescription(`${executor.tag} deleted ${messages.size} messages in ${messages.first().channel}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed)
  
}