
	var u = args[1];
	if (msgcont === "%natribu")
	{
					message.channel.send("", {
			embed: {
				color: 14423066,
				title: ":x: Ошибка!",
				description: "Не указано конкретное лицо."
			}
		});	
	}
	else
	{
	var nahh = ["пиздуй нахуй!","иди блять нахуй","пошёл нахуй!","иди нахуй","пошёл нахуй!","вали нахуй","пошёл нахер","пошёл нахуй, чмо"];
	var nah = nahh[Math.floor(Math.random() * nahh.length)];
			message.channel.send("", {
			embed: {
				color: 16769887,
				author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
                },
				description: u + ", " + nah
			}
		});	
}