module.exports = async(Discord, client, emoji) => {
  
const fetchedLogs = await emoji.guild.fetchAuditLogs({
		limit: 1,
		type: 'EMOJI_DELETE',
	});
const edeleteLog = fetchedLogs.entries.first();
const { executor, target } = edeleteLog;

	
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`An emoji has been deleted!`)
  .setDescription(`${emoji}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};