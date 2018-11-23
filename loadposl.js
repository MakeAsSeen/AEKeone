
      var text = "Загружаем послание... \n :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:"
      var i = 0;
	  var posll = ["Ты лох.","Пошёл нахуй.","Тут нет никакого послания.","Хуй тебе.","Иди нахуй.","Отъебись","...","Твоё послание я засунул в жопу.","А вот не дам тебе послания.","Ебать ты удачливый. Вот твоё послание: завтра тебе посчастливится!","Завтра ты будешь счастлив.","Завтра тебе нихуя не повезёт.","Завтра ты найдёшь деньги... хотя, хуй там."];
	  var posl = posll[Math.floor(Math.random() * posll.length)];

	  message.channel.send(text).then((msg) => {

        setTimeout(function() { msg.edit("") }, 1000);
		setTimeout(function() { msg.edit(posl) }, 15000);
		});
 
