module.exports = async(Discord, client, role) => {
  
const fetchedLogs = await role.guild.fetchAuditLogs({
		limit: 1,
		type: 'ROLE_DELETE',
	});
const rdeleteLog = fetchedLogs.entries.first();
const { executor, target } = rdeleteLog;

	
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`A role has been deleted!`)
  .setDescription(`Role: ${role.name}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};