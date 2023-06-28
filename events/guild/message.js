const mySecret = process.env['token']
const mySecret = process.env['token']
module.exports = (Discord, client, message) => {
  const prefix = '*';
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  if(!message.guild) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  
  if(command) command.execute(client, message, args, Discord);
};