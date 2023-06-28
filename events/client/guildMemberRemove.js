module.exports = (Discord, client, member) => {
  
const myServer = "831444619031216138"; 
const leaveChannel = "865103271134887996";
 if(member.guild.id === myServer) {
 client.channels.cache.get(leaveChannel).send(`**${member.user.tag}** just left the server !`);
 }
  
const logChannel = "864849427902234645";
const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle(`Member left!`)
  .setDescription(`Member: ${member.user.tag}`)
  .setTimestamp();
  client.channels.cache.get(logChannel).send(embed);
    
  
};