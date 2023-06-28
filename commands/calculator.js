module.exports = {
  name: "calculator",
  aliases: ["calc"],
  description: "simple calculator",
  execute(client, message, args, Discord){
    
const math = require('mathjs');

if(!args[0]) return message.channel.send('Please provide a question');
 let resp;
 try {
 resp = math.evaluate(args.join(" "));
 } catch (e) {
 return message.channel.send('Please provide a **valid** question');
 }
 const embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle('Calculator')
 .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
 .addField('Answer', `\`\`\`css\n${resp}\`\`\``);

 message.channel.send(embed);
    
  }
};