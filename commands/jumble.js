module.exports = {
  name: "jumble",
  description: "jumble mini-game",
  async execute(client, message, args, Discord){

const words = [
  'apple',
  'banana',
  'channel',
  'discord',
  'fire',
  'elephant',
  'fire',
  'manage',
  'support',
  ];

function shuffle(l) {
  const list = l.slice();
  const shuffled = [];
  while (list.length > 0) {
    const idx = Math.floor(Math.random() * list.length);
    shuffled.push(list[idx]);
    list.splice(idx, 1);
  }
  return shuffled;
}

    const { players } = message.client;
    const player = (message.author.id);

    const idx = Math.floor(Math.random() * words.length);
    const word = words[idx].split("").filter(x => /\S/.test(x));
    const scramble = shuffle(word).join("");
    const embed = new Discord.MessageEmbed()
      .setTitle("Word Scramble #1")
      .setFooter(`\`${scramble}\``);
    message.channel.send(embed);

player.word = word.join("");

if(word === player.word){
  message.channel.send("smart");
}
    
  }
};