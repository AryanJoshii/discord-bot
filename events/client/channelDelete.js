module.exports = async(Discord, client, channel) => {
  
  const fetchedLogs = await channel.guild.fetchAuditLogs({
		limit: 1,
		type: 'CHANNEL_DELETE',
	});
const chdeleteLog = fetchedLogs.entries.first();
const { executor, target } = chdeleteLog;

  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`A ${channel.type} channel has been deleted!`)
  .setDescription(`Channel: #${channel.name}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};