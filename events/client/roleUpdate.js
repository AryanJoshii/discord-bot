module.exports = async(Discord, client, oldRole, newRole) => {
  
const fetchedLogs = await oldRole.guild.fetchAuditLogs({
		limit: 1,
		type: 'ROLE_UPDATE',
	});
const rupdateLog = fetchedLogs.entries.first();
const { executor, target } = rupdateLog;

if(oldRole.name !== newRole.name){
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`Role name has been updated!`)
  .addField("Before", `${oldRole.name}`)
  .addField("After", `${newRole.name}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
}
else if(oldRole.color !== newRole.color){
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`Role color has been updated!`)
  .addField("Before", `${oldRole.color.toString(16)}`)
  .addField("After", `${newRole.color.toString(16)}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
}
else if(oldRole.permissions !== newRole.permissions){
  
  const logChannel = "864849427902234645";
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(`${executor.tag}`, executor.avatarURL({dynamic: true}))
  .setTitle(`Role permissions has been updated!`)
  .setFooter(`ID: ${newRole.id}`)
  .setTimestamp();

const oldPerms = oldRole.permissions.serialize();
const newPerms = newRole.permissions.serialize();

const permUpdated = [];

for (const [key, element] of Object.entries(oldPerms)) {
if (newPerms[key] !== element) permUpdated.push(key);
        }

if (oldRole.permissions > newRole.permissions) {
//Permission lost

embed.setDescription(`${newRole.toString()} has lost the following permissions\n${permUpdated.join(",\n")}`);
client.channels.cache.get(logChannel).send(embed);

} else if (oldRole.permissions < newRole.permissions) {
//Permission given

embed.setDescription(`${newRole.toString()} has been given the following permissions\n${permUpdated.join(",\n")}`);
client.channels.cache.get(logChannel).send(embed);

}

}

};