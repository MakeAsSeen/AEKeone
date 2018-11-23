const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.RichEmbed();
var fs = require("fs");

function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("%" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}


client.on('ready', () => {
    client.user.setActivity("burn porn", { type: 3 })
    console.log("MakeAsSeen");
});

client.on('message', message => {
    if (message.channel.type == 'text' && message.guild.id == "326326755822534656") {
    var args = message.content.split(/[ ]+/);
    var args2 = message.content.split("|");

    if (message.author.bot) return;
 
    if(commandIs("eat", message))
    {
      message.react("🍽")
    }

    if (commandIs("eval", message))
    {
        eval(fs.readFileSync(`./commands/eval.js`, "utf8"))
    }

    if (commandIs("loadposl", message))
    {
        eval(fs.readFileSync(`./commands/;pad.js`, "utf8"))
    }

    if (commandIs("wth", message))
    {
        eval(fs.readFileSync(`./commands/wth.js`, "utf8"))
    }

    if(commandIs("badphrase", message))
    {
        eval(fs.readFileSync(`./commands/badphrase.js`, "utf8"))
    }

    if(commandIs("natribu", message))
    {
        eval(fs.readFileSync(`./commands/natribu.js`, "utf8"))
    }

    if(commandIs("percent", message))
    {
        eval(fs.readFileSync(`./commands/percent.js`, "utf8"))
    }

    if(commandIs("help", message))
    {
        message.channel.send("Префикс: `%`\n\nКоманды:\n`wth` - составить кулстори;\n`badphrase` - рандомный набор слов с матами, обычно ржачный;\n\nCreated by **MakeAsSeen#0827**.")
    }

    if (commandIs("dresnya_random", message) && message.guild.id == '451856568389074964') {
        if (message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
            var dresnyaroleid = message.guild.roles.filter(r => r.name == "Яма с дреснёй").first().id
            var personintheyama = message.guild.members.filter(m => m.roles.filter(mr => mr.id == dresnyaroleid).first()).first()
            if (personintheyama != undefined) {
                personintheyama.removeRole(dresnyaroleid)
            }
            var dresnyawhitelist = fs.readFileSync('dresnyawhitelist.txt', 'utf8')
            var newpersonintheyama = message.guild.members.array()[Math.floor((Math.random() * message.guild.members.array().length) % message.guild.members.array().length)]
            while (newpersonintheyama.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") || dresnyawhitelist.includes(newpersonintheyama.user.id)) {
                newpersonintheyama = message.guild.members.array()[Math.floor((Math.random() * message.guild.members.array().length) % message.guild.members.array().length)]
            }
            newpersonintheyama.addRole(dresnyaroleid)
            message.channel.send(`В этот раз в яму с дреснёй попадает ${newpersonintheyama.user.username}!`)
        } else message.reply("*У вас не хватает сил на управление Ямой...*")
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

}
});

client.login("NTE1NTkwMTE2MjI4NTk1NzE0.DtnUqQ.1ekDWySOQJKaWzjE4rKF5o4jJyQ");