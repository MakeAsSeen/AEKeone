
	var prob = Math.floor((Math.random() * 100) % 100 + 1);
    message.channel.send("", {
	embed: {
		color: 16769887,
		title: "Вероятность:",
		description: prob + "%"
	}
	});
	