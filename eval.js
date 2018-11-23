  if (message.author.id === "228940110266236929") {
    try {
      var code = args.join(" ").substring(6);
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    } catch(err) {
    var embed1 = new Discord.RichEmbed()
    .setColor(0xDE0000)
    .setTitle("Ошибка!")
    .setDescription(`:warning: \`ERROR\` \`\`\`xl\n`+err+`\n\`\`\``)
    message.channel.send(embed1)
    }; 
    }  
     else 
    {
    var embed2 = new Discord.RichEmbed()
    .setColor(0xDE0000)
    .setTitle("Ошибка!")
    .setDescription("Данная команда доступна только владельцу бота.")
    message.channel.send(embed2)
    }