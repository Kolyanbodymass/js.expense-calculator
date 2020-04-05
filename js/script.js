let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

	
let money, time;

// function start() {
// 	money = +prompt("Ваш бюджет на месяц?", '');
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// 	while(isNaN(money) || money == "" || money == null) {
// 		money = +prompt("Ваш бюджет на месяц?", '');
// 	}
// }

// start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
			if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) != null && a != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				console.log ("bad result");
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function() {
		if(appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
	
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i <= 3; i++) {
			let b = prompt("Статья необязательных расходов?", '');
			if ( (typeof(b))=== 'string' && (typeof(b)) !=null && b != '' && b.length < 50) {
				appData.optionalExpenses[i] = b;
			} else {
				console.log ("bad result");
				i--;
			}
		}
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		while( (typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
			items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		}
		appData.income = items.split(', ');
		let additional = prompt('Может что то еще?', '');
		if ( (typeof(additional))=== 'string' && (typeof(additional)) !=null && additional != '') {
			appData.income.push(additional);
		}
		
		appData.income.sort();

		let arr = [];
		appData.income.forEach(function (item, i) {
			arr.push(' ' + (i+1) + " - " + item);
		});
		alert("Дополнительные заработки: " + arr);
	}
	
};

for (let key in appData) {
	console.log("Из чего состоит наш объект: " + key + " - " + appData[key]);
}

