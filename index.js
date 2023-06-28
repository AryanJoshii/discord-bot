const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Cheesty is Online!");
});

app.listen(2000, () => {
  console.log("Bot is ready!");
});

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.token);