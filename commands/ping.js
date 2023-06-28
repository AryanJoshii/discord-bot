module.exports = {
  name: "ping",
  description: "simple ping-pong command",
  execute(client, message) {
    const ping = Date.now() - message.createdTimestamp;
    message.channel.send(`🏓 pong! **${ping} ms**`);
  }
};