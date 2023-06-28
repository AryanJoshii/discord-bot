module.exports = async(Discord, client, emoji) => {
  
const fetchedLogs = await emoji.guild.fetchAuditLogs({
		limit: 1,
		type: 'EMOJI_CREATE',
	});
const ecreateLog = fetchedLogs.entries.first();
const { executor, target } = ecreateLog;

  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle("A new emoji has been added!")
  .setDescription(`${emoji} : ${emoji.name}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};