module.exports = (Discord, client, member) => {
  
const myServer = "831444619031216138"; 
const welcomeChannel = "831444619031216141";
 if(member.guild.id === myServer) {
 client.channels.cache.get(welcomeChannel).send(`Welcome ${member}!`);
 }

const logChannel = "864849427902234645";
const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle(`Member joined!`)
  .setDescription(`Member: ${member}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
  

};