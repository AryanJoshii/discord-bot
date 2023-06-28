module.exports = async(Discord, client, oldMember, newMember) => {
  
const fetchedLogs = await oldMember.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_UPDATE',
	});
const ecreateLog = fetchedLogs.entries.first();
const { executor, target } = ecreateLog;

if(oldMember.displayName !== newMember.displayName){  
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(`Nickname Changed!`)
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .addField("Before", `${oldMember.displayName}`)
  .addField("After", `${newMember.displayName}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
}

};