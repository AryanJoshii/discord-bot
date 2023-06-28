module.exports = {
  name: "join",
  description: "join message test",
  execute(client, message, args, Discord){
    
    client.emit('guildMemberAdd', message.member);
  }
  
};