module.exports = async(Discord, client, channel) => {
  
const fetchedLogs = await channel.guild.fetchAuditLogs({
		limit: 1,
		type: 'CHANNEL_CREATE',
	});
const chcreateLog = fetchedLogs.entries.first();
const { executor, target } = chcreateLog;

	
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`A new ${channel.type} channel has been created!`)
  .setDescription(`Channel: #${channel.name}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};