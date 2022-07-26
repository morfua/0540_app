

const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@email.ru",
	id: "1",
	about: "Тут я рассказываю о себе, своих увлечениях",
	avatar:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQis3EJa1vjAKP5xnUKfl4k79t-3nYWh_MGtA&usqp=CAU",
};

const users = {
	0: { name: "Сергей", lastname: "Миронов" },
	1: { name: "Владислвава", lastname: "Кабанова" },
	2: { name: "Андрей", lastname: "Бородин" },
	3: { name: "Юлия", lastname: "Смирнова" },
	4: { name: "Ксения", lastname: "Иванова" },
	5: { name: "Кузьма", lastname: "Чижиков" },
	6: { name: "Марина", lastname: "Петрова" },
};




export function getUser() {
	return user;
}

export function getUsers(){
  return users;
}
