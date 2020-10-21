const { S_IFMT } = require("constants");
const Discord = require("discord.js"); 

const Client = new Discord.Client; 

const prefix = "!"; 

Client.on("ready", () => {
    console.log("bot opérationel");
}); 

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Boubacar"){
        message.reply("Ah oui le chanteur de Wejdene ?"); 
        message.channel.send("cette tchoin je vois"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Hamid"){
        message.reply("Le pire fondateur wola"); 
        message.channel.send("nan en vrai il est bg ptdr"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Iguro"){
        message.reply("Le plus beau y'a quoi ?"); 
        message.channel.send("Tu veux le sucer ?"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Maxou"){
        message.reply("Ce petit pd qui ban tout le temps"); 
        message.channel.send("Moi pauvre bot ;("); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "boubacar"){
        message.reply("Ah oui le chanteur de Wejdene ?"); 
        message.channel.send("cette tchoin je vois"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "hamid"){
        message.reply("Le pire fondateur wola"); 
        message.channel.send("nan en vrai il est bg ptdr"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "iguro"){
        message.reply("Le plus beau y'a quoi ?"); 
        message.channel.send("Tu veux le sucer ?"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "maxou"){
        message.reply("Ce petit pd qui ban tout le temps"); 
        message.channel.send("Moi pauvre bot ;("); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "spag"){
        message.reply("Cette petite merde ?"); 
        message.channel.send("Tu lui veux quoi ?"); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Argent"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "argent"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Moula"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "Money"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "money"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "paypal"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});

Client.on("message", message => {
    if(message.author.bot) return; 

    if(message.content == "moula"){
        message.reply("https://www.paypal.com/paypalme/zeioux"); 
        message.channel.send(""); 
    }
});






Client.login("NzY2MzUyOTg3MzQ1NjQ5Nzc0.X4iH1g.qFLcLWHqh-KzuMPFeeQYWvaWdE0")
