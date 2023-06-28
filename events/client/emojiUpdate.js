module.exports = async(Discord, client, oldEmoji, newEmoji) => {
  
const fetchedLogs = await oldEmoji.guild.fetchAuditLogs({
		limit: 1,
		type: 'EMOJI_UPDATE',
	});
const edeleteLog = fetchedLogs.entries.first();
const { executor, target } = edeleteLog;

	
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`Emoji name has been updated!`)
  .addField("Before", `${newEmoji} : ${oldEmoji.name}`)
  .addField("After", `${newEmoji} : ${newEmoji.name}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  
};