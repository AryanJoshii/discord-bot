module.exports = {
  name: "leave",
  description: "leave message test",
  execute(client, message, args, Discord){
    
    client.emit('guildMemberRemove', message.member);
  }
  
};