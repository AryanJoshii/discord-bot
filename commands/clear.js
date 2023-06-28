module.exports = {
  name: "clear",
  aliases: ["purge"],
  description: "delete messages",
  async execute(client, message, args, Discord){

let arg = message.content.split(" ");
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send("Incorrect usage of command you need to provide an amount of messages to Clear. Example: -clear 20");
if(isNaN(clear)) return message.channel.send(":x: | Please Put a Valid Number to Clear messages.");
if(clear > 100) return message.channel.send(":x: | can't Clear more than 100 messages.");
if(clear < 1) return message.channel.send("You cannot Clear less than 1 message.");

message.channel.bulkDelete(clear);
await message.channel.send(`succesfully clear ${clear} message | If clear fails please make sure you have MANAGE_MESSAGES to make the clear seccessful.`)
.then(message => 
 message.delete({timeout: 5000})
 );
} else{
message.reply("You dont have perms!");
}

  }
};