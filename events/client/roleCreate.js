module.exports = async(Discord, client, role) => {
  
const fetchedLogs = await role.guild.fetchAuditLogs({
		limit: 1,
		type: 'ROLE_CREATE',
	});
const rcreateLog = fetchedLogs.entries.first();
const { executor, target } = rcreateLog;

	
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`A new role has been created!`)
  .setDescription(`Role: ${role}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};