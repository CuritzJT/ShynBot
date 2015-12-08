var Discord = require("discord.js");
var auth = require("./auth.json");
var help = require("./help.json");
var client = new Discord.Client();

client.on("ready", function(ready){
  bot.setUsername("Shyn");
  bot.setStatus("online", "half life 2");
});

client.on("message", function(message){
  
});

client.login(auth.email, auth.pass);
