const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const respostas = [
        "Sim" ,
        "Não" ,
        "Definitivamente sim" ,
        "Definitivamente não",
        "Absolutamente sim" ,
        "Absolutamente não",
        "Não em um milhão de anos" ,
        "Prefiro não responder"
]

var pergunta = args.slice(0).join(" ");
if(!pergunta) return message.channel.send(`${message.author} Me pergunte algo`)
var res = respostas[Math.floor(Math.random() * respostas.length)];

  const embed = new Discord.MessageEmbed()
        .setTitle('<a:harrypotter:701931779270901831>8ball<a:harrypotter:701931779270901831>')
        .setColor('#00FF00')
        .addField(`**Pergunta:**` , `${pergunta}`)
        .addField(`**Resposta:**` , `${res}`)
        .setFooter(`ultilize f!8ball para me fazer uma pergunta`)


message.channel.send(embed)
    }
