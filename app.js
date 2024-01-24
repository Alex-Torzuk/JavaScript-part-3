//==============Повторение==================

//===========Пользовательские функции==========

// function func (){
//     console.log('Hello Alex')
// }
// func()

// function func(){
//     for(let i = 1; i <= 100; i++){
//         console.log(i)
//     }
// }
// func()

//Параметры функций в JavaScript

// function func(num) {
//     console.log(num ** 3)
// }

// func(2)

// function func (num) {
//     if(num > 0){
//         console.log('+++')
//     }else(console.log('---'))
// }

// func(-1)

//Несколько параметров функций в JavaScript

// function func (num1, num2, num3){
//     console.log(num1 + num2 + num3)
// }

// func(5, 5, 5)

//Параметры-переменные функций в JavaScript

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function func(num1, num2, num3){
//     console.log(num1 + num2 + num3)
// }

// func(param1, param2, param3)

//Необязательные параметры в JavaScript

// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3);
// func(3);
// func();

//Инструкция return в JavaScript

// function func (num){
//     return num ** 3
// }
// let res = func(3)
// console.log(res)

// function func (num) {
//     return num ** 2
// }

// let res = func(3) + func(4)
// console.log(res)

//Последовательный вызов функций в JavaScript

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// console.log(round(sqrt(2)))

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let num1 = 2
// let num2 = 3
// let num3 = 4

// let res = round(sum(sqrt(num1), sqrt(num2), sqrt(num3)))
// console.log(res) 

// function round(num) {
// 	return num.toFixed(3);
// }

//Тонкое место return в JavaScript

// function func(num) {
// 	return num;
	
// 	let res = num ** 2;
// 	return res;
// }

// console.log( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) );
// console.log( func(-5) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num ** 2;
// }

// console.log( func(10) );
// console.log( func(-5) );

//Цикл и return в JavaScript

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// console.log( func(5) );

//Применение return в циклах в JavaScript

// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// console.log( func() );

// function func (num){
//     let iterations = 0
//     while(num >= 10){
//         num /= 2
//         iterations++
//     }
//     return iterations
// }

// console.log(func(100))

//Прием работы с return в JavaScript

// function func(num1, num2) {
	
	
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
	
	
// }

// console.log(func(3, 4));

//Флаги в функциях JavaScript

// let arr = [1, 2, 3, 4, 5]
// function func(arr){
//     for(let elem of arr){
//         if (elem < 0){
//          return   false
//         }
//     }
//     return true
// }

// console.log(func(arr))

// let num = 13
// let num2 = 12

// function func(num){
//     if(num %2 != 0){
//         return console.log('Нечетные')
//     }else return (console.log('Четные'))
// }
// func(num)
// func(num2)

// const arr = [1, 1,  2, 3, 4, 5]

// function func(arr){
//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] === arr[i - 1]){
            
//             return console.log('Yes')
//         }
        
//     }
//     return console.log('No')
// }

// func(arr)

//Логические операторы без if в функциях JavaScript

// function func(a, b) {
// 	return a == b
// }

// console.log(func(2, 1))

// function func1(num1 = 3, num2 = 5) {
// 	return num1 + num2
// }

//  console.log(func1())

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
		
// 	}
//     return res;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res
// }

// console.log(func(arr))

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2() );

// let res = sum([1, 2, 3, 4, 5]);


// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

// console.log(res);

// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//     return sum
// }

// function add(num) {
// 	if (num <= 9) {
// 		return num+= '0';
// 	}
//     else return num
// }

// console.log(add(3))

// let arr = [1, 2, 3, 4, 5];
// let res = sum(arr);
// console.log(res);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
//   let numStr = num.toString(); // Преобразовываем число в строку
//   let arr = numStr.split(''); // Разбиваем строку на символы
//   let sum = 0;

//   for (let elem of arr) {
//     sum += parseInt(elem); // Преобразуем символ обратно в число перед сложением
//   }

//   return sum;
// }

// console.log(isPrime(20)); // должен вывести true

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i != 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

//Практика на функции в JavaScript

// const arr = [1,2, 3, 4, 5]
// function func(arr){
//   let sam  = 0
//   for (let elem of arr){
//     sam+= elem 
//   }
//   return sam
// }
// console.log(func(arr))

// let a  = ['A', 'B', 'C']
// console.log(a.reverse())

//===Глобальные переменные в функциях в JavaScript

// function func() {
// 	console.log(num);
// }

// let num;

// num = 1;
// func();

// num = 2;
// func();

//Локальные переменные в функциях в JavaScript

// function func() {
// 	let num = 5; // локальная переменная
// 	return num
// }

// console.log(func()); // ничего не выведет, а выдаст ошибку в консоль

// function func() {
// 	let num = 5;
// 	return num;
// }

// console.log(num);\\

// function func() {
// 	let num = 5;
// 	return num;
// }

// console.log(func());

//Одинаковые имена переменных в функциях в JavaScript

// let num = 1;

// function func() {
// 	num = 2;
// }
// func();

// console.log(num);

//Изменение глобальных переменных в JavaScript

// let num = 1;

// function func() {
// 	let num = 2;
// }
// func();

// console.log(num);

// let num = 1;

// function func() {
// 	let num = 2;
//     return num
// }

// console.log(num);
// console.log(func());

// let num = 1;

// function func() {
// 	num = 2;
// }

// console.log(num);
// func();

// let num = 1;

// function func() {
// 	num++;
// }

// func();
// func();
// func();
// console.dir(num);

// function func() {
// 	num = 2;
// }

// let num = 1;
// console.log(num);
// func();

// function func() {
// 	num = 2;
// }

// let num = 1;
// func();
// console.log(num);

//Глобальные переменные и параметры функций в JavaScript

// function func(localNum) {
// 	console.log(localNum);
// }

// func(1);

// function func(localNum) {
// 	console.log(localNum);
// }

// let num = 1;
// func(num);
// num = 2;
// func(num)

// function func(localNum) {
// 	localNum = 2;
// }

// let num = 1;
// func(num);
// console.log(num);

// function func(localNum) {
// 	let num = 2;
//     return console.log(num)
// }

// let num = 1;
// func(num);
// console.log(num);

//Совпадение имен с параметрами в JavaScript

// function func(num) {
// 	console.log(num);
// }

// let num = 1;
// func(num);

// function func() {
// 	num = 2;
// }

// let num = 1;
// func();
// console.log(num);

// function func() {
// 	let num = 2;
// }

// let num = 1;
// func();
// console.log(num);

//Параметры-объекты JavaScript


// function func(obj) {
// 	obj.a = '!';
//     obj.b = 'Hi'
// }

// let obj = {a: 1, b: 2, c: 3};
// func(obj);
// console.log(obj);

// function func(arg) {
// 	arg = '!';
// }

// let obj = {a: 1, b: 2, c: 3};
// func(obj.a);
// console.log(obj);

// function func(obj) {
// 	obj = '!';
// }

// let obj = {a: 1, b: 2, c: 3};
// func(obj.a);
// console.log(obj);

// function func(arr) {
// 	arr.splice(1, 1);
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func(arr) {
// 	arr.slice(1, 1);
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

//Исходный код функции и ее результат в JavaScript

// function func(){
//     return 'This is my an umbrella'
// }

// console.log(func)

//Функция как переменная в JavaScript

// function func(){
//     return 'My name is Lux'
// }

// func = 123
// console.log(func)

// function func1(){
//     return 3
// }

// let func2 = func1
// console.log(func1())
// console.log(func2())

// let func1 = function(){
//     return 1
// }

// let func2 = function(){
//     return 2
// }

// let sum = func1() + func2()

// alert(sum)

//Function expression и Function declaration в JavaScript

// const func = function x(){
//     return 'Hi my friend'
// }
// alert(func())

// let func1 = function() {console.log('!')};
// let func2 = function() {
// 	console.log('!');
// };
// function func3() {
// 	console.log('!');
// }
// func1()
// func2()
// func3()

//Нюансы функциональных выражений в JavaScript

// (function func() {
// 	console.log('!');
// })
// func()

//Массив с анонимными функциями в JavaScript

// let arr = [
//     function() {return 1},
// 	function() {return 2},
// 	function() {return 3},
// ]
// let sum = 0
// for (let elem of arr){
//     sum += elem()
// }console.log(sum)

//console.log(arr[0]() + arr[1]() + arr[2]())

//Объект с анонимными функциями в JavaScript

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// };

// let sum = 0

// for(let key in obj){
//     sum += obj[key]()
//     console.log(obj[key]())
// }console.log(sum)

//console.log(obj.func1() + obj.func2() + obj.func3())

// let math = {
//     sum: function(arr){
//         let sum = 0
//         for(let elem of arr){
//             sum += elem
//         }
//         return sum
//     },
// 	square: function(arr) {
//         let sum = 0
//         for(let elem of arr){
//             elem = elem * elem
//             sum += elem
//         }
//         return sum
//     },
// 	cube: function(arr) {
//         let sum = 0
//         for(let elem of arr){
//             elem = elem * elem * elem
//             sum += elem
//         }
//         return sum
//     },
// };

// let arrAll = [1, 2, 3]

// console.log(math.sum(arrAll))
// console.log(math.square(arrAll))
// console.log(math.cube(arrAll))

//Передача функций параметрами в JavaScript

// test(
// 	function() {return 1;},
// 	function() {return 2;}
// );

// function test(func1, func2) {
// 	console.log( func1() + func2() ); // выведет 3
// }

// test(
//     function(){return 1},
//     function (){return 2},
//     function (){return 3}
// ) 
// function test(func1, func2, func3){
//     console.log(func1() + func2() + func3())
// }

//Именованные функции


//         function func1(){return 1}
//         function func2(){return 2}
//         function func3(){return 3}
    
//     function test(func1, func2, func3){
//         console.log(func1() + func2() + func3())
//     }
// test(func1, func2, func3)

//Переделаем на Function Expression:

// let func1 = function (){return 1}
// let func2 = function (){return 2}
// let func3 = function (){return 3}
    
//     function test(one, two, three){
//         console.log(one() + two() + three())
//     }
// test(func1, func2, func3)

//Параметры передаваемых функций

// function test(func) {
// 	console.log(func(3));
// }
// test(function(num) {
// 	return num * num * num;
// });

// function test(func) {
// 	console.log(func(3));
// }

// let func = function(num) {
// return num * num * num;
// }

// test(func)

// function test(func) {
// 	console.log(func(3));
// }

// function func(num) {
// return num * num * num;
// }

// test(func)

// function test(func1, func2) {
// 	alert(func1() + func2())
// }

// function func1() {
// return 2
// }
// function func2() {
//     return 3
//     }

// test(func1, func2)

//Передадим и число параметром

// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }

// console.log(test(2, function(num){
//     return num * num
// }, function(num){
//     return num * num * num
// } ))

//Именованные функциональные выражения в JavaScript

// let test = function func() {
// 	console.log('!'); // выводим '!'
// 	func(); // вызываем сами себя
    
// };

// test();

//Вложенные функции в JavaScript

// function func(num1, num2){
//     function square(num){
//         return num * num
//     }

//     function cube(num){
//         return num * num * num
//     }

//     return square(num1) + cube(num2)
// }

// console.log(func(2, 3))

//Область видимости вложенных функций в JavaScript

// function test() {
// 	let num = 1; // переменная внешней функции
	
// 	function func() {
// 		console.log(num); // выведет 1
// 	}
	
// 	func(); // вызываем внутреннюю функцию
// }

// test(); // вызываем внешнюю функцию

// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
	
// 	num1 = 2;
// 	func();
// }

// test(1, 2);

// function test(num) {
// 	function func(localNum) {
// 		console.log(num); // выведет 1
// 		console.log(localNum); // выведет 1
// 	}
	
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
	
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		console.log(num);
// 	}
	
// 	func(num + 1);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(localNum);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1);

// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
	
// 	func(num + 1);
// }

// test(1);

//Одноименные параметры

// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
// 	num = 2;
// 	func(num);
// }

// test(1);

// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
// 	func(num);
// 	num = 2;
//     func(num);
// }

// test(1);

//Функция, возвращающая функцию в JavaScript

// function func1(){
//     return function(){
//         return 1
//     }
// }

// function func2(){
//     return function(){
//         return 2
//     }
// }

// console.log(func1()() + func2()())

// function func(){
//     return function(){
//         return function(){
//             return function(){
//                 return function(){
//                     return 'Hello Alex ))'
//                 }
//             }
//         }
//     }
// }

// console.log(func()()()()())

// function func(num1){
//     return function (num2){
//         return function (num3){
//             return num1 + num2 + num3
//         }
//     }
// }

// console.log(func(2)(2)(2))

// function func(num1){
//     return function (num2){
//         return function (num3){
//             return function (num4){
//                 return function(arr){
//                   return  arr = [num1, num2, num3, num4]
//                 }
//             }
//         }
//     }
// }

// console.log(func(2)(3)(4)(5)())

//Лексическое окружение функций в JavaScript

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let func = test();
// console.log(func());

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// console.log(test()());

// function test() {
// 	let num1 = 1;
	
// 	return function() {
// 		return num1 + num2;
// 	}
// }

// let num2 = 2;
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		return num;
// 	}
// }

// let num = 2;
// let func = test();
// console.log(func());

//Замыкания в JavaScript

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++; // прибавляем единицу
// 	}
// }

// test()();
// test()();
// test();

// function func(){
//     let num = 1
//     return function(){
        
//         num++
//         console.log(num)
//     }
// }

// let res = func()

// res()
// res()

// function func(){
//     let num = 10
//     return function(){
//         console.log(num)
//         num--
        
//     }
// }

// let res = func()

// res()
// res()

// function func(){
//     let num = 10
//     return function(){
//         console.log(num)
//         num--
//         if(num === -1){
//             console.log('This is over')
//         }
        
//     }
// }

// let res = func()

// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };

// func()();
// func()();
// func()();

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };

// let test = func;

// test()();
// test()();
// test()();

// let counter = 0;
		
// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// };

// let func = test;

// let func1 = func();
// //let func2 = func();
// func1();
// //func2();
// func1();
// //func2();

// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test()();

// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();

// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test();
// console.log(test)
// // let func1 = func();
// // let func2 = func();
// // func1();
// // func2();
// // func1();
// // func2();

//Вызов функции на месте в JavaScript

// -function() {
// 	console.log('!');
// }();

// let result = function() {
// 	return '!';
// }();
		
// console.log(result);

// let sum = 1 + function() {
// 	return 2;
// }();

// console.log(sum); // выведет 3

// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result);

// let result = (function() {
// 	return '!';
// })();

// console.log(result);

// let result = (function() {
// 	return '!';
// });

// console.log(result);


// (function() {
// 	// какой-то код
//     return function(){
//         return function(){
//             console.log('Hello')
//         }
//     }
// })()()();

// (function(num1) {
// 	// какой-то код
    
//     return function(num2){
//         console.log(num1 + num2)
//     }
// })(1)(2);

// (function(num1) {
// 	// какой-то код
//     return function (num2){
//         return function (num3){
//             console.log(num1 + num2 + num3)
//         }
//     }
// })(1)(2)(3);

// let result = 1
// +function() {
// 	return 2;
// }();

// console.log(result);

// let result = 1;
// +function() {
// 	return 2;
// }();

// console.log(result);

// let str = 'str';

// (function() {
// 	console.log(1);
// })();

// let str = 'str'

// (function() {
// 	console.log(1);
// })();

//Замыкания и вызов функции на месте в JavaScript

// let func = function() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
//         num++
// 	}
// };

// let res = func()
// res()
// res()
// res()


// let func = (function() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
//         num++
//         if (num > 5){
//             num = 1
//         }
// 	}
// })();

// func()
// func()
// func()
// func()
// func()
// func()
// func()

//Функции-коллбэки в JavaScript
// let func = function(position){
//     console.log(position)
// }
// const h1 = document.querySelector('h1')
// h1.addEventListener('click', function(){
//     if ('click'){
//         window.navigator.geolocation.getCurrentPosition(func)
//     }
// })


// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }

// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num * 2;
// });

// console.log(result);

// function every(arr, callback){
//     let result = []

//     for (let elem of arr){
//         let reversedStr = elem.split('').reverse().join('');
//     result.push(callback(reversedStr));
//     if(result){
        
//     }
//     }

//     return result
// }

// let result = every(['Hello', 'how', 'are', 'you'], function(str){
//     return str
// })

// console.log(result)

// function every(arr, callback) {
//     let result = [];
  
//     for (let elem of arr) {
//       let modifiedElem = callback(elem);
//       result.push(modifiedElem);
//     }
  
//     return result;
//   }
  
//   let stringsArray = ['hello', 'world', 'javascript'];
  
//   let result = every(stringsArray, function (str) {
//     return str.charAt(0).toUpperCase() + str.slice(1); // Преобразование первой буквы в заглавную
//   });
  
//   console.log(result);
  
// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }
// function square(num) {
// 	return num ** 2;
// }
// let result = each([1, 2, 3, 4, 5], square);
// console.log(result);



// function each(arr, callback){
//     let result = []
//     for (let elem of arr){
//         result.push(callback(elem))
//     }
//     return result
// }

// function cube(num) {
// 	return num ** 3;
// }

// let result = each([1, 2, 3, 4, 5], cube)
// console.log(result)

//Стрелочные функции в JavaScript

// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(every)

// let result = every([1, 2, 3, 4, 5], elem => elem > 0)

// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = every ([1,2, 3, 4, 5], (elem, index) => elem * index > 10)

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = each(arr, (elem, index) => elem * index > 10 );

//Работа с рекурсией в JavaScript


// let i = 1;

// (function func(){
// 	console.log(i);
// 	i++;
	
// 	if (i <= 10){
// 		func(); // здесь функция вызывает сама себя
// 	}
// })()
//func();


// function func(arr) {
// 	console.log(arr.shift(), arr);
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }

// func([1, 2, 3]);

// let arr = [1, 2, 3, 4, 5];

// function func(arr){
//     console.log(arr.shift(), arr)

//     if(arr.length != 0){
//         func(arr)
//     }
// }
// func(arr)

// function getSum(arr) {
// 	let sum = arr.shift();
	
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
	
// 	return sum;
// }

// console.log(getSum([1, 2, 3]));


// let arr = [1, 2, 3, 4, 5];

// function sum(arr){
//     let sumEl = arr.shift()

//     if(arr.length !== 0){
//         sumEl *= sum(arr)
//     }
//     return sumEl
// }

// console.log(sum(arr))

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

// function func(obj){
//     for(let key in obj){
//         if(typeof key == 'object'){
//             func(obj[key])
//         } else{
//             console.log(obj[key])
//         }
//     }
// }



// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]

// function func(arr){
//     for (let elem of arr){
//         if(typeof elem == 'object'){
//             func(elem)
//         } else{
//             console.log(elem)
//         }
//     }
// }
// func(arr)

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// for (let key in obj){
//     console.log(obj[key])
// }
// let i = 1
// function func(){
//     console.log(i)
//     i++
    
//     if(i <= 10){
//         func()
//     }
    
// }
// func()

//Метод map для перебора массива в JavaScript

// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function(elem) {
// 	console.log(elem); // последовательно выведет 1, 2, 3, 4, 5
// });

// let arr = [1, 2, 3, 4, 5]

// let result = arr.map(function(elem){
//     //let newArr = []
//     return elem ** elem
// })

// console.log(result)

// let arrStr = ['Hello', 'my', 'friend']

// let result = arrStr.map(function(elem){
//     return elem+= '!'
// })
// console.log(result)

// let arrStr = ['Hello', 'my', 'friend']

// let result = arrStr.map(function(elem){
//     return elem.split('').reverse().join('')
// })
// console.log(result)

// let arr = ['123', '456', '789'];

// console.log(Number(arr.join('')))
// console.log(+arr.join(''))

// let arr = ['123', '456', '789'];

// let newArr = arr.map(function (str) {
//   return str.split('').map(Number);
// });

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5]

// let result = arr.map((elem, index) => {
//     return elem * index
// })
// console.log(result)

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });

// console.log(result);

// let arr = [1, 2, 3, 4]

// let result = function(arr){
//     let sum = 0
//     for(let elem of arr){
//         sum+= elem
//     }
//     return sum
// }
// console.log(result(arr))

//Метод forEach для перебора массива в JavaScript

// let arr  = [1, 2, 3, 4, 5]
// let sum = 0
// arr.forEach(elem => {
    
//     sum += elem 

// })
// console.log(sum)

//Метод filter для фильтрации массива в JavaScript

// let arr = [-1, -2, 1, 2, 3, 12]

// let result = arr.filter(elem => elem > 0 && elem < 10)
   
// console.log(result)

// let arr = ['Hi', 'everybody',  'sasha']
// let result = arr.filter((elem) => {
//     if (elem.length < 5){
//         return elem
//     }
// })

// console.log(result)

// let arr = [-2, -1, 0, 1, 2, 3, 4]

// let result = arr.filter(elem => elem > 0).length
// console.log(result)

//Метод every для проверки массива в JavaScript

// let arr = [-2, -1, 0, 1, 2, 3, 4]

// let result = arr.every(elem => elem > 0)
// console.log(result)

//Метод some для проверки массива в JavaScript

// let arr = [-2, -1, 0, 1, 2, 3, 4]
// let result = arr.some(elem => elem < 0)
// console.log(result)

//Оператор spread в JavaScript

// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }

// console.log(func(...arr))

// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

// let arr = [1, 2, 3, 4, 5]
// let min = Math.min(...arr);
// console.log(min)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr  = ['a', ...arr1, ...arr1, 'b', 'c'];
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];

// let arr  = ['a', 'b', 'c', ...arr2];
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];

// let arr  = [0, ...arr3];
// console.log(arr);

//Оператор spread для строк и чисел в JavaScript

// let arr = [...'12345'];
// console.log(arr);

// let arr = ['a', ...'12345'];
// console.log(arr);

//Оператор rest в JavaScript

// func(1, 2, 3, 4, 5);

// function func(a, b, ...rest) {
// 	console.log(a);    // выведет 1
// 	console.log(b);    // выведет 2
// 	console.log(rest); // выведет [3, 4, 5]
// }

// Применение операторов rest и spread в JavaScript
// Функция, находящая сумму чисел

// function func(...rest){
//     let sum = 0
//     for (let elem of rest){
//         sum += elem
//     }
//     return sum
// }

// console.log(func(1, 2, 3, 4, 5))

// function merge(...arrs) {
// 	return [].concat(...arrs);
// }

// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Деструктуризация массивов в JavaScript

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];

// let [name, surname, department, position, salary] = arr
//  console.log(name)
//  console.log(surname)
//  console.log(department)
//  console.log(position)
//  console.log(salary)

//Деструктуризация массива из функции в JavaScript


// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }
// let [name, surname, department, position, salary] = func()

//  console.log(name)
//  console.log(surname)
//  console.log(department)
//  console.log(position)
//  console.log(salary)

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];


//Пропуск элементов массива при деструктуризации в JavaScript

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// // let department = arr[2];
// // let position   = arr[3];

// let [, , department, position, ] = arr

// console.log(department)
// console.log(position)


//Лишние значения при деструктуризации массива в JavaScript


// let arr = [2025, 12];
// let [year, month, day] = arr;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет undefined


//Остаток массива при деструктуризации в JavaScript


// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// // let name    = arr[0];
// // let surname = arr[1];

// // let info = arr.slice(2); // все элементы со второго до конца массива

// let [name, surname, ...rest] = arr

// console.log(name)
// console.log(surname)
// console.log(rest)


//Значения по умолчанию при деструктуризации массива в JavaScript


// let arr = ['John', 'Smit', 'development', 'programmer'];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];

// // let position;
// // if (arr[3] !== undefined) {
// // 	position = arr[3];
// // } else {
// // 	position = 'trainee';
// // }

// let [name, surname, department, position = trainee] = arr

// console.log(name)
// console.log(surname)
// console.log(department)
// console.log(position)


//Функции по умолчанию при деструктуризации массива в JavaScript

// let arr = []
// function func() {
// 	return (new Date).getDate();
// }

// let monthFunc = function func() {
// 	return (new Date).getMonth()+1
// }

// let yearFunc = () => (new Date).getFullYear()

// let [year = yearFunc(), month = monthFunc(), day = func()] = arr;

// console.log(year)
// console.log(month)
// console.log(day)

// // let date = new Date
// // console.log(date)


//Объявление переменных при деструктуризации массива в JavaScript


// let arr = [2025, 12, 31];
// let year = 2023;

// let [year1, month, day] = arr;

// console.log(year)
// console.log(month)
// console.log(day)


//Деструктуризация объектов в JavaScript


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// ({color, width, height} = options)
// console.log(color)
// console.log(width)
// console.log(height)
// // let color  = options.color;
// // let width  = options.width;
// // let height = options.height;


//Имена переменных при деструктуризации объектов в JavaScript


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color: c, width: w, height: h} = options

// console.log(c)
// console.log(w)
// console.log(h)

// let c = options.color;
// let w = options.width;
// let h = options.height;


//Значения по умолчанию при деструктуризации объектов в JavaScript


// let obj = {
// 	month: 12,
// 	day:   31,
// };

// let {year = 2025, month, day} = obj;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 1
// console.log(day);   // выведет 31


// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color = 'black', width, height} = options

// // let color;
// // if (options.color !== undefined) {
// // 	color = options.color;
// // } else {
// // 	color = 'black';
// // }

// // let width  = options.width;
// // let height = options.height;

// console.log(width)
// console.log(height)
// console.log(color)


//Переменные и значения по умолчанию в JavaScript


// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color: c = 'black', width: w, height: h} = options

// // let с;
// // if (options.с !== undefined) {
// // 	с = options.color;
// // } else {
// // 	с = 'black';
// // }

// // let w = options.width;
// // let h = options.height;

// console.log(w)
// console.log(h)
// console.log(c)


//Объявление переменных при деструктуризации объектов в JavaScript


// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };

// let year, month, day; // объявим переменные заранее

// ({year, month, day} = obj)

// console.log(year)
// console.log(month)
// console.log(day)


//Деструктуризация параметров функций в JavaScript



// func([2025, 12, 31], [2026, 11, 30]);

// function func([year1, month1, day1], [year2, month2, day2]) {
// 	console.log(year1);  // выведет 2025
// 	console.log(month1); // выведет 12
// 	console.log(day1);   // выведет 31
	
// 	console.log(year2);  // выведет 2026
// 	console.log(month2); // выведет 11
// 	console.log(day2);   // выведет 30
// }


// function func(employee) {
//     [name, surname, department, position, salary] = employee
// 	console.log(name, surname, department, position, salary)
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// function func(employee) {
//     [name, surname, ...info] = employee
// 	console.log(name)
//     console.log(surname)
//     console.log(info)
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// function func(employee) {
//     [name, surname, department, position = 'джуниор'] = employee
//     console.log(name)
//     console.log(surname)
//     console.log(department)
//     console.log(position)
// 	// let name       = employee[0];
// 	// let surname    = employee[1];
// 	// let department = employee[2];
	
// 	// let position;
// 	// if (arr[3] !== undefined) {
// 	// 	position = arr[3];
// 	// } else {
// 	// 	position = 'джуниор';
// 	// }
// }

// func( ['John', 'Smit', 'development'] );


// function func(department, employee, hired) {
    
//     // [department] = department
//     // console.log(department)
//     [name, lastName] = employee
    
//    let [year, month, day] = hired
//    console.log(department)
//     console.log(employee)
//     console.log(year)
//     console.log(month)
//     console.log(day)
// 	// let name     = employee[0];
// 	// let surname  = employee[1];
	
// 	// let year  = hired[0];
// 	// let month = hired[1];
// 	// let day   = hired[2];
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );


// function func(options) {
//     ({color, width, height} = options)
// 	console.log(color)
//     console.log(width)
//     console.log(height)
// }

// func( {color: 'red', width: 400, height: 500} );


// function func(options) {

//     ({color, width, height} = options)

//     console.log(color)
//     console.log(width)
//     console.log(height)

// 	// let width  = options.width;
// 	// let height = options.height;
	
// 	// let color;
// 	// if (options.color !== undefined) {
// 	// 	color = options.color;
// 	// } else {
// 	// 	color = 'black';
// 	// }
// }

// func( {color: 'red', width: 400, height: 500} );


//Работа с объектом Date в JavaScript

// let date = new Date()
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log((date.getFullYear()))


//Форматирование даты в JavaScript


// let date = new Date()
// //console.log(date.getHours())

// function addZero(num){
//     if (num >= 0 && num <= 9){
//         return '0' + num
//     } else {
//         return num
//     }
// }

// console.log(
//     addZero(date.getHours()) + ':' +
//     addZero(date.getMinutes()) + ':' +
//     addZero(date.getSeconds()) + '  ' +
//     addZero(date.getDate()) + '.' +
//     addZero(date.getMonth()+1) + '.' +
//     addZero(date.getFullYear())
// )


//Смена формата даты в JavaScript

// function func(num){
//     if(num >= 0 && num <=9){
//         return '0' + num
//     } else{
//         return num
//     }
// }
// let date = new Date()
// let newDate = func(date.getFullYear()) + '-' + 
// func(date.getMonth()) + '-' +
// func(date.getDate() )

// console.log(newDate.split('-').reverse().join('/'))


//Получения дня недели на JavaScript


// let day = new Date().getDay()
// console.log(day)
// if(day != 0 && day != 6){
//     console.log('This is working day')
// } else{
//     console.log('This is weekend')
// }


//Вывод частей даты словом в JavaScript


// let date = new Date();
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// let date = new Date()

// let monthNum = date.getMonth()
// console.log(months[monthNum])


//Установка времени в объекте Date в JavaScript

// let date = new Date(2025, 10, 5); // установим 5 ноября 2025 года
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


// let date = new Date(1988, 10, 13)


// let day = date.getDay()
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day])


//Получение времени в формате timestamp в JavaScript


// let date = new Date();
// console.log(date.getTime());

// let date = new Date(2020, 02, 01);
// console.log(date.getTime());



//Разность между датами в формате timestamp в JavaScript


// let now  = new Date();
// let date = new Date(2015, 11, 4, 23, 59, 59);

// let diff = now.getTime() - date.getTime();
// console.log(diff)


//Автоматическая корректировка дат в JavaScript
//Нахождение последнего дня месяца в JavaScript


// let date = new Date(2025, 2, 0);
// console.log(date.getDate());

// function func(year, month, day){
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let date = new Date(year, month, day).getDate()
//     return console.log(date) 
// }

// func(2023, 2, 0)

// let year  = 2025;
// let month = 0;
// let day   = 32;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }


///======Основы работы с DOM в JavaScript

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')

// console.log(elem1.textContent)
// console.log(elem2.textContent)
// console.log(elem3.textContent)


// let a = document.querySelector('.block p')
// console.log(a)

// let www = document.querySelector('.www')
// console.log(www)


//Привязывание обработчиков к элементам в JavaScript

// let but1 = document.querySelector('#button1')
// but1.addEventListener('click', () => {
//     alert('First button')
// })

// let but2 = document.querySelector('#button2')
// but2.addEventListener('click', () => {
//     alert('Second button')
// })

// let but3 = document.querySelector('#button3')
// but3.addEventListener('click', () => {
//     alert('Third button')
// })

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }


// let but1 = document.querySelector('#button1')
// let but2 = document.querySelector('#button2')
// but1.addEventListener('click', func1)
// but2.addEventListener('click', func2)


//Один обработчик ко многим элементам в JavaScript

// function func() {
// 	console.log('message');
// }

// let elems = document.querySelectorAll('p')

// for(let elem of elems){
//     elem.addEventListener('click', func)
// }


//Несколько обработчиков одного события в JavaScript


// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', func1)
// elem.addEventListener('click', func2)
// elem.addEventListener('click', func3)


//Обработчики разных событий в JavaScript

// let but = document.querySelector('button')
// but.addEventListener('dblclick', () => {
//     console.log('I like it')
// })

// let but = document.querySelector('button')

// but.addEventListener('mouseover', () => {
//     console.log('Hello')
// })

// but.addEventListener('mouseout', () => {
//     console.log('By')
// })


//Работа с текстом элементов на JavaScript

// let num1 = document.querySelector('.num1')
// // let num2 = document.querySelector('.num2')
// // let result = document.querySelector('.result')
// let button = document.querySelector('.button')

// // function funcText(){
// //     text.textContent = 'i would like to take a vacation'
// //     console.log(text.textContent)
// // }

// // button.addEventListener('click', funcText)

// // button.addEventListener('click', () => {
// //     result.textContent = +num1.textContent + +num2.textContent
// //     return result.textContent

// // })

// button.addEventListener('click', () =>{
//     num1.textContent++ 
// })


//Работа с HTML кодом элементов на JavaScript

// let num = document.querySelector('.num1')
// let button = document.querySelector('.button')
// button.addEventListener('click', ()=>{
//     num.innerHTML = '<strong>Новый текст абзаца</strong>'
    
// })


//Атрибуты тегов как свойства в JavaScript

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', () => {
//     console.log(elem.type = 'submit')
// })

// let text = document.querySelector('.text')
// let net = document.querySelector('.net')
// let button = document.querySelector('.button')
// button.addEventListener('click', () => {
//     return text.textContent = net.href
// })

// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let btn1 = document.querySelector('.btn1')
// let btn2 = document.querySelector('.btn2')
// btn1.addEventListener('click', () => {
//     img1.src = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
// })

// btn2.addEventListener('click', () => {
//     img2.src = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
// })


//Работа с текстовыми полями в JavaScript

// let input = document.querySelector('#elem')
// let button = document.querySelector('.button')
// let p = document.querySelector('.p')

// let func1 = function (){
//     p.textContent = input.value
// }

// button.addEventListener('click', func1)

// let input1 = document.querySelector('.input1')
// let input2 = document.querySelector('.input2')
// let input3 = document.querySelector('.input3')
// let input4 = document.querySelector('.input4')
// let input5 = document.querySelector('.input5')
// let btn = document.querySelector('.button')
// let p = document.querySelector('.p')
// btn.addEventListener('click', () => {
//     p.textContent =
//         +input1.value +
//         +input2.value +
//         +input3.value +
//         +input4.value +
//         +input5.value
//     }

    
// )

// let input1 = document.querySelector('.input1')
// let input2 = document.querySelector('.input2')

// let btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     let inp1 = input1.value
//     input1.value = input2.value
//     input2.value = inp1
// })


//Фокус текстовых полей в JavaScript


// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	console.log(elem.value);
// });

//let elem = document.querySelector('#elem')
// function func(){
// if(elem.addEventListener == 'focus'){
//     elem.value = '1'
// }  if (elem.addEventListener == 'blur'){
//     elem.value = '2'
// }
//}
//elem.addEventListener('focus',() => elem.value )
// elem.addEventListener('blur',() => {
//     // elem.value = elem.value ** 2
//     elem.value = ''
// })


//Исключения при работе с атрибутами в JavaScript


// let div = document.querySelector('div')
// let btn = document.querySelector('.btn')
// btn.addEventListener('click', ()=>{
//     // console.log(div.className)
//     // div = div.className = 'cool'
//     let arr = []
//     arr.push(div.className)
//     console.log(arr)
// })


//Цепочки методов и свойств в JavaScript


// console.log(document.querySelector('#image').src);


//Объект this в JavaScript

// let input = document.querySelector('#elem')
// input.addEventListener('focus', function() {
//     this.value = 1
// } )
// input.addEventListener('blur', function() {
//     this.value = 2
// })

// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     this.textContent++
// })


//Преимущество this в JavaScript


// let = p1 = document.querySelector('.p1')
// let = p2 = document.querySelector('.p2')
// let = p3 = document.querySelector('.p3')
// let = p4 = document.querySelector('.p4')
// let = p5 = document.querySelector('.p5')

// function func(){
//     this.textContent += '!'
// }

// p1.addEventListener('click', func)
// p2.addEventListener('click', func)
// p3.addEventListener('click', func)
// p4.addEventListener('click', func)
// p5.addEventListener('click', func)


// let input1 = document.querySelector('.input1')
// let input2 = document.querySelector('.input2')
// let input3 = document.querySelector('.input3')

// function func(){
//     this.value = this.value ** 2
// }

// input1.addEventListener('blur', func)
// input2.addEventListener('blur', func)
// input3.addEventListener('blur', func)


//Получение группы элементов в JavaScript


// let text = document.querySelectorAll('.www')

// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(){
//     for(let elem of text){
//         elem.textContent = 'text'
//     }
// })

// let elems = document.querySelectorAll('.www')
// let btn = document.querySelector('#btn')


// btn.addEventListener('click', function(){
//     for(let i = 0; i < elems.length; i++){
//         elems[i].textContent+=  ' ' + (i+1) 
        
//     }
// })

// let inputs = document.querySelectorAll('.inp')

// let p = document.querySelector('.p')

// let btn = document.querySelector('#btn')

// function func(){
//     let sum = 0
//     for(let elem of inputs){
//         p.textContent = sum+= +elem.value
//     }
// }

// btn.addEventListener('click', func)


//Добавление обработчиков в цикле в JavaScript

// let inp = document.querySelectorAll('.inp')
// function func() {
// 	this.value = Number(this.value) + 1;
// }

// for(let elem of inp){
//     elem.addEventListener('blur', func)
// }

// let elems = document.querySelectorAll('p')
// function func(){
//     this.textContent = this.textContent ** 2
// }

// for(let elem of elems){
//     elem.addEventListener('click', func)
// }


//Добавление анонимных обработчиков в цикле в JavaScript


// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function (){
//         this.textContent++;
//     });
// }


//Отвязывание событий в JavaScript


// let elem = document.querySelector('.elem')
// console.log(elem.href)
// elem.addEventListener('click', function func(){
//     let hre = elem.href
//     elem.textContent =  hre
//     elem.removeEventListener('click', func)
// })

// let btn = document.querySelector('#btn')
// btn.addEventListener('click', func)

// function func(){
//  if(btn.value < 10){
//     btn.value++    
//  }else{
//     btn.removeEventListener('click', func)
//  }    
// }


//Отвязывание обработчиков событий в цикле в JavaScript


// let elems = document.querySelectorAll('p')

// for(let elem of elems){
//     elem.addEventListener('click', func)
// }

// function func(){
//     console.log(this.textContent)
//     this.removeEventListener('click', func)
// }

// let textElems = document.querySelectorAll('p')

// for(let elem of textElems){
//     elem.addEventListener('click', func)
// }

// function func(){
//     this.textContent += '!'
//     this.removeEventListener('click', func)
// }

//Отвязывание анонимных функций в JavaScript

// let elems = document.querySelectorAll('ul li')
// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         if(this.textContent > 0){
//             this.textContent++
//         }
//         if(this.textContent >= 10){
//             this.removeEventListener('click', func)
//         }
        
//     })
// }



//Работа с атрибутами через методы в JavaScript

//Метод getAttribute

// let elem = document.querySelector('#elem')
// console.log(elem.getAttribute('class'))


//Установка

// let elem = document.querySelector('#elem')
// let newElem = elem.setAttribute('value', 'Hello Alex, my name is Lux')
// let classElem = elem.setAttribute('class', 'valid')


//Удаление

// let elem = document.querySelector('#elem')
// elem.removeAttribute('value')


//Проверка


// let elem = document.querySelector('#elem')
// console.log(elem.hasAttribute('value'))


//Манипулирование CSS классами в JavaScript
//Массив классов


// let elem = document.querySelector('#elem')
// console.log(elem.classList.length)

//Добавление классов
// let elemNames = elem.classList


// elem.classList.add('xxx')

// for(let elemName of elemNames){
//     document.write(elemName + '<br>')
// }

//Удаление классов
// elem.classList.remove('www', 'zzz')
// let elemNames = elem.classList


// elem.classList.add('xxx')

// for(let elemName of elemNames){
//     document.write(elemName + '<br>')
// }


//Проверка классов

// let elemNames = elem.classList


// elem.classList.add('xxx')
// console.log(elem.classList.contains('ggg'))
// for(let elemName of elemNames){
//     document.write(elemName + '<br>')
// }


//Чередование классов



// let elemNames = elem.classList


// elem.classList.add('xxx')
// console.log(elem.classList.toggle('www'))
// for(let elemName of elemNames){
//     document.write(elemName + '<br>')
// }


//Стилизация элементов через атрибут style в JavaScript


// let contain = document.querySelector('#contain')
// let btn = document.querySelector('.btn')

// btn.addEventListener('click', ()=>{
//     contain.style.width = '200px'
//     contain.style.height = '200px'
//     contain.style.backgroundColor = 'green'
//     contain.style.fontSize = '40px'
// })

// let elems = document.querySelectorAll('ul li')
// let btn = document.querySelector('.btn')

//    btn.addEventListener('click', function func(){
//     for(elem of elems){
//     elem.style.cssFloat = 'left'
//    }})


//Стилизация с помощью CSS классов на JavaScript

// let btn1 = document.querySelector('.btn1')
// let btn2 = document.querySelector('.btn2')
// let btn3 = document.querySelector('.btn3')
// let elem = document.querySelector('p')
// btn1.addEventListener('click', ()=>{
//     elem.classList.toggle('line')
    
// })
// btn2.addEventListener('click', ()=>{
//     elem.classList.toggle('bold')
// })
// btn3.addEventListener('click', ()=>{
//     elem.classList.toggle('colors')
//     btn3.style.backgroundColor = 'red'
// })


//Нахождение элементов по родственным связям в JavaScript

//Потомки элементов

// let childElems = document.querySelector('#elem')
// let elems = childElems.children;
// for (let elem of elems) {
// 	console.log(elem.innerHTML);
// }

// console.log(elems)
// for(let elem of elems){
//     // elem.firstElementChild.style.color = 'red'
//     // elem.lastElementChild.style.color = 'green'
//    console.log(elem)
// }
// elem.firstElementChild.style.color = 'red'
// elem.lastElementChild.style.color = 'green'


//Родители элементов


// let childEl = document.querySelector('#elem')
// childEl.parentElement.style.border = '1px solid red'


//Поиск всех родителей

// let childEl = document.querySelector('#elem')
// console.log(childEl.closest('.www'))


//Поиск соседей


// let elem = document.querySelector('#elem')
// elem.previousElementSibling.textContent += '!'
// elem.nextElementSibling.textContent += '!'
// let a = elem.nextElementSibling
// a.nextElementSibling.textContent += '!'
// let rever = elem.previousElementSibling.textContent
// console.log(rever)
// elem.previousElementSibling.textContent = elem.nextElementSibling.textContent
// elem.nextElementSibling.textContent = rever


//Другие полезные методы для поиска на JavaScript


// let elem = document.getElementById('elem')

// elem.textContent = 'Hello'


//Получение по имени тега


// let elems = document.getElementsByTagName('li')
// for(let elem of elems){
//     elem.style.color = 'red'
// }


//Получение по имени класса


// let elems = document.getElementsByClassName('www')
// for(let elem of elems){
//     elem.style.color = 'red'
// }


//Поиск элементов внутри другого элемента в JavaScript

// let parent = document.querySelector('#parent')
// let elems1 = parent.querySelectorAll('.www')
// let elems2 = parent.querySelectorAll('.ggg')
// console.log(elems1)


//Пользовательские атрибуты в JavaScript


// let elem = document.querySelector('#elem')
// elem.addEventListener('click', ()=>{
//     elem.textContent += elem.dataset.text
// })


// let elems = document.querySelectorAll('div')
// for(let elem of elems){
//     elem.addEventListener('click', function func (){
//         this.textContent += elem.dataset.num
//         this.removeEventListener('click', func)
//     })
// }

// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function func(){
//     btn.dataset.name++
    
// })

// btn.addEventListener('dblclick', function func2(){
// console.log(btn.dataset.name)
// })


// let input = document.querySelector('#elem')
// input.addEventListener('blur', ()=>{
//     if(input.value.length > input.dataset.length){
//         console.log('Is too many elements')
//     }
// })

// let input = document.querySelector('#elem')
// input.addEventListener('blur', ()=>{
//     if(input.value.length < input.dataset.min || input.value.length > input.dataset.max){
//         console.log('Error')
//     }
// })


//Имена с дефисами


// let elem = document.querySelector('#elem')
// elem.addEventListener('click', function func(){
//     elem.textContent += elem.dataset.productPrice * elem.dataset.productAmount
//     elem.removeEventListener('click', func)
// })


//Обращение через методы


// let elems = document.querySelectorAll('p')
// for(let i = 0; i <= elems.length-1; i++){
//     console.log(elems[i])
//     //elems[i].dataset.num += (i+1)
//     let a = i+1
//     elems[i].setAttribute('data-num', a) 
// }


//Работа с узлами в JavaScript
// let elems = document.querySelector('#elem')
// for(let elem of elems.childNodes){
//     console.log(elem)
// }


//Советы по написанию кода на примере DOM в JavaScript
//Поиск ошибок в коде с DOM в JavaScript


// let elems = document.querySelectorAll('p');
// for(let elem of elems){
    
//     elem.textContent += '!';
// }


// let elems = document.querySelectorAll('p')

// for(let elem of elems){
//     elem.addEventListener('click', function (){
//         this.textContent++
//     })
// }

// let button = document.querySelector('button');
// let elem = document.querySelector('p');

// button.addEventListener('click', function() {
//     elem.style.fontWeight = 'bold'
//     //elem.innerHTML = '<b>elem.innerHTML</b>';	
// });

//let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');


    
    // button.addEventListener('click', ()=>{
    //     let sum = 0
    //    for(let elem of elems){
        
    //     sum+= +elem.textContent
        
    //    } 
        
    //    console.log(sum)
    // })

    // button.addEventListener('click', function() {
    //     let sum = 0;
        
    //     for (let elem of elems) {
    //         sum += Number(elem.textContent);
    //     }
        
    //     console.log(sum);
    // });


    // let elems  = document.querySelectorAll('p');
    // for (let elem of elems) {
    //     elem.addEventListener('click', function() {
    //         this.textContent += '!';
    //     });
    // }


    // let elems = document.querySelectorAll('p')
    // let btn = document.querySelector('button')

    // for(let elem of elems){
    //     btn.addEventListener('click', ()=>{
    //         elem.style.fontWeight = 'bold'
    //         //elem.innerHTML = '<b>+elem.innerHTML+</b>'
    //     })
    // }


    // let button = document.querySelector('button');
    // let elems  = document.querySelectorAll('p');
    // let sum = 0;

    // for (let elem of elems) {
    //     sum+= +elem.textContent 
        
    //     button.addEventListener('click', function() {
    //         console.log(sum);
    //     });
    // }

    // let button = document.querySelector('button');
    // let elems  = document.querySelectorAll('input');
    // let sum = 0;
    
    // button.addEventListener('click', function() {
    //     // for (let elem of elems) {
    //     //     elem.setAttribute('value',  '')
    //     //     sum += +elem.value
            
    //     // }
    //     for (let elem of elems) {
    //         sum += +elem.value;
    //     }
    //     console.log(sum);
    // });


    // let btn  = document.querySelector('#btn');
    // let inp1 = document.querySelector('#inp1');
    // let inp2 = document.querySelector('#inp2');
    // let inp3 = document.querySelector('#inp3');

    // btn.addEventListener('click', function() {
    //     inp3.value = +inp1.value + +inp2.value;
    // });


    // let btn  = document.querySelector('#btn');
    // let res  = document.querySelector('#res');
    // let inp1 = document.querySelector('#inp1');
    // let inp2 = document.querySelector('#inp2');

    // btn.addEventListener('click', function() {
    //     res.textContent = +inp1.value + +inp2.value;
    // });


    // let inputs = document.querySelectorAll('input')
    // let button = document.querySelector('#btn')
    // for(let elem of inputs){
    //     button.addEventListener('click', function (){
    //         if(elem.value === elem.dataset.text){
    //             console.log(true)
    //         } else{
    //             console.log(false)
    //         }
    //     })
    // }


    // let inputs = document.querySelectorAll('input');
    // let button = document.querySelector('#btn');

    // let texts = [
    //     'text1',
    //     'text2',
    //     'text3',
    // ];

    // button.addEventListener('click', function() {
    //     for (let input of inputs) {
    //         if (texts.includes(input.value)) {
    //             input.classList.remove('wrong'); // Убираем класс "wrong", если он был добавлен
    //             input.classList.add('right');
    //         } else {
    //             input.classList.remove('right'); // Убираем класс "right", если он был добавлен
    //             input.classList.add('wrong');
    //         }
    //     }
    // });

    // let inputs = document.querySelectorAll('input')
    // let btn = document.querySelector('#btn')
    // let sum = 0
    // btn.addEventListener('click', function(){
    //     for(let input of inputs){
    //         sum+= Number(input.value)
    //     }
    //     console.log(sum)
    // })
    

    // let inp1 = document.querySelector('#inp1')
    // let inp2 = document.querySelector('#inp2')
    // let inp3 = document.querySelector('#inp3')
    // let btn = document.querySelector('#btn')
    // btn.addEventListener('click', function(){
    //     inp3.value = Number(inp1.value) + Number(inp2.value)
    // })


    // let inp = document.querySelector('#inp')
    // inp.addEventListener('blur', ()=>{
    //     console.log('Hello Alex')
    // })



    //======Отработка изученного материала на работу с DOM
//1
// let input = document.querySelector('input')
// let p = document.querySelector('p')
// input.addEventListener('blur', ()=>{
//     p.textContent += input.value
// })
    
//2
// let inp1 = document.querySelector('#inp1')
// let inp2 = document.querySelector('#inp2')
// let sum = document.querySelector('p')
// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     sum.textContent += +inp1.value + +inp2.value
// })   

//3
//4
//5
// let inp1 = document.querySelector('.inp1')
// let inp2 = document.querySelector('.inp2')
// let inp3 = document.querySelector('.inp3')
// let inp4 = document.querySelector('.inp4')
// inp1.addEventListener('blur', function(){
//     inp2.value = inp1.value[0]
//     inp3.value = inp1.value[2]
//     inp4.value = inp1.value[4]
// })

//===========Работа с текстареа в JavaScript

// let elem = document.querySelector('#elem')
// let p = document.querySelector('p')
// elem.addEventListener('blur', ()=>{
//     p.textContent = p.textContent += ' ' + elem.value  
// })

//Атрибут disabled в JavaScript

// let inp = document.querySelector('input')
// let btn1 = document.querySelector('.btn1')
// let btn2 = document.querySelector('.btn2')
// btn1.addEventListener('click', ()=>{
//     inp.setAttribute("disabled", "disabled")
// })
// btn2.addEventListener('click', ()=>{
    
//         inp.disabled = false
    
// })


// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     inp.setAttribute("disabled", "disabled")
// })

// let inp = document.querySelector('input')
// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     inp.setAttribute('disabled', 'disabled')
//     if(inp.getAttribute('disabled')){
//         console.log('Заблокирован инпут')
//     } else(console.log('Разблокирован инпут'))
// })

//Работа с чекбоксами в JavaScript


// let elem = document.querySelector('#elem');
// console.log(elem.checked)

//1
// let inp = document.querySelector('#check')
// let btn1 = document.querySelector('.btn1')
// let btn2 = document.querySelector('.btn2')
// btn1.addEventListener('click', ()=>{
//     inp.setAttribute('checked', 'checkbed')
// })
// btn2.addEventListener('click', ()=>{
//     // if(inp.getAttribute){
//     //     inp.checked = false
//     // }
//     inp.checked = false
    
// })


//2
// let inp = document.querySelector('#check')
// let btn = document.querySelector('.btn')
// let p = document.querySelector('p')
// btn.addEventListener('click', ()=>{
//     if(inp.getAttribute('checkbox')){
//         console.log('Hello')
//     }else{console.log('by')}
// })

//Чередование атрибутов без значений


// let elem = document.querySelector('#elem')
// let btn = document.querySelector('#button')
// btn.addEventListener('click', ()=>{
//     if(elem.disabled){
//         elem.disabled = false
//     }else{elem.disabled = true}
// })

// let elem = document.querySelector('#elem')
// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     if(elem.checked){
//         elem.checked = false
//     }else{
//         elem.checked = true
//     }
// })


//Работа с радиокнопками в JavaScript


// let radios = document.querySelectorAll('input[type="radio"]')
// let p = document.querySelector('p')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', ()=>{
//     for(let radio of radios){
//         if(radio.checked){
//             p.textContent += + " " + +radio.value
//         }
//     }
// })


//Событие change в JavaScript
// let input = document.querySelector('input')
// let p = document.querySelector('p')
// input.addEventListener('change', function(){
// p.textContent = input.value
// })


// let elem  = document.querySelector('#elem')
// elem.addEventListener('change', function(){
//     if(elem.checked){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// })

// let input = document.querySelector('input')
// input.addEventListener('change', function(){
//     for(let i = 0; i <= input.value.length-1; i++){
//         if(input.value.length <= 5){
//             input.style.borderColor = 'green'
//         }else{
//             input.style.borderColor = 'red'
//         }
//     }
// })

//Событие input в JavaScript


// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });

// let elem = document.querySelector('#elem')
// elem.addEventListener('input', function(){
//     for(let i = 0; i <= elem.value.length; i++){
//         if(elem.value.length-1 >= 5){
//             console.log('namber greater then five  ')
//         }
//     }
// })


// let input = document.querySelector('#elem')
// let p = document.querySelector('p')
// let sum = 0
// input.addEventListener('input', function(){
//     for(let i = 0; i <= input.value.length-1; i++){
//         if(input.value.length >= 5){
//             p.textContent = sum += input.value[i]
//         }
//     }
// })

//=============Работа с текстареа в JavaScript

// let elem = document.querySelector('#elem')
// let p = document.querySelector('p')

// elem.addEventListener('blur', ()=>{
//     p.textContent = elem.value
// })

//Атрибут disabled в JavaScript

// let input = document.querySelector('#inp')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', ()=>{
//     input.setAttribute('disabled', 'disabled')
    
// })

// let input = document.querySelector('#inp')
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', ()=>{
//     input.setAttribute('disabled', 'disabled')
// })

// btn2.addEventListener('click', ()=>{
//     input.disabled = false
// })

// let input = document.querySelector('#inp')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', ()=>{
//     if(input.disabled){
//         console.log('Инпут заблокирован')
//     } else{
//         console.log('Инпут не заблокирован')
//     }
// })

//Работа с чекбоксами в JavaScript

// let input = document.querySelector('#inp')
// let btn1 = document.querySelector('#btn-1')
// let btn2 = document.querySelector('#btn-2')
// btn1.addEventListener('click', ()=>{
//     input.setAttribute('checked', 'checked')
// })

// btn2.addEventListener('click', ()=>{
//     input.checked = false
// })

// let input = document.querySelector('#inp')
// let p = document.querySelector('p')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', ()=>{
//     if(input.checked){
//         p.textContent = 'Hello'
//     }else{
//         p.textContent = 'by'
//     }
// })

//Чередование атрибутов без значений
// let input = document.querySelector('#inp')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', ()=>{
//     if(input.checked){
//         input.checked = false
//     } else {
//         input.checked = true
//     }
// })


//Работа с радиокнопками в JavaScript


// let radios = document.querySelectorAll('input[type="radio"]');
// let p = document.querySelector('p')
// let button = document.querySelector('#button');

// button.addEventListener('click', ()=>{
//     for(let radio of radios){
//         if(radio.checked){
//             p.textContent = radio.value
//         }
//     }
// })


// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			console.log(radio.value);
// 		}
// 	}
// });

//Событие change в JavaScript

// let input = document.querySelector('#inp')
// let p = document.querySelector('p')

// input.addEventListener('change', ()=> {
//     p.textContent = input.value
// })

// let input = document.querySelector('#inp')
// input.addEventListener('change', ()=>{
//     if(input.checked){
//         console.log('true')
//     }
// })


// let h1 = document.querySelector('h1')
// h1.textContent = 'for IT'


// let input = document.querySelector('#input')
// input.addEventListener('change', ()=>{
//     if(input.value.length <= 5){
//         input.style.borderColor = 'green'
//     } else {
//         input.style.borderColor = 'red'
//     }
// })

// Событие input в JavaScript

// let input = document.querySelector('#input')
// let p = document.querySelector('p')
// input.addEventListener('input', ()=>{
//     if(input.value.length == 5){
//         p.textContent = input.value.length
//     }
// })

// var textInput = document.getElementById("textInput");
//     var remainingChars = document.getElementById("remainingChars");

//     textInput.addEventListener("input", function() {
//         var maxLength = parseInt(textInput.getAttribute("maxlength"));
//         var currentLength = textInput.value.length;
//         var remaining = maxLength - currentLength;

//         if (remaining >= 0) {
//             remainingChars.textContent = "Осталось символов: " + remaining;
//         } else {
//             remainingChars.textContent = "Превышено на: " + Math.abs(remaining);
//         }
//     });


//Методы focus и blur в JavaScript

// let inp1 = document.querySelector('#inp1')
// let inp2 = document.querySelector('#inp2')

// inp1.addEventListener('input', function(){
//     if (inp1.value.length == 2){
//         inp2.focus()
//     }
    
// })

// inp2.addEventListener('input', function(){
//     if (inp2.value.length == 2){
//         inp2.blur()
//     }
// })


//Работа с выпадающими списками в JavaScript

// let elem = document.querySelector('#select')

// elem.addEventListener('change', function(){
//     console.log(this.value)
// })

// let select = document.querySelector('#select')
// let btn = document.querySelector('#btn')
// let p = document.querySelector('p')

// btn.addEventListener('click', function(){
//     p.textContent = select.value
// })


// let select = document.querySelector('#select')
// select.addEventListener('change', function(){
//     let date = new Date(this.value, 2, 0)
//     if(date.getDate() == 29){
//         console.log(this.value + '-' + true )
//     } else{
//         console.log(this.value + '-' + false)
//     }
// })

// let select = document.querySelector('#select')

// let body = document.querySelector('body')

// select.addEventListener('change', function(){
//     if(this.value == 'red'){
//         body.style.backgroundColor = 'red'
//     }
//     if(this.value == 'blue'){
//         body.style.backgroundColor = 'blue'
//     }
//     if(this.value == 'black'){
//         body.style.backgroundColor = 'black'
//     }
// })

// let select = document.querySelector('#select')
// select.addEventListener('change', function(){
//     if(this.value >= 6){
//         console.log('Это выходной день')
//     }
//     else{
//         console.log('Это рабочий день')
//     }
// })

// Изменение выбранного пункта списка на JavaScript


// let select = document.querySelector('#select');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	select.value = 'one';
// });

// let select = document.querySelector('#select')
// let date = new Date()
// console.log(date.getMonth()+1)
// select.value = date.getMonth()


//Номер выбранного пункта выпадающего списка

// let select = document.querySelector('#select');
// console.log(select.selectedIndex); // выведет 1

// let inp = document.querySelector('#inp')
// let select = document.querySelector('#select')

// inp.addEventListener('blur', function(){
//     select.selectedIndex = inp.value
// })

// let select = document.querySelector('#select')
// let date = new Date()
// console.log(date.getDay())
// select.selectedIndex = date.getDay()-1



//Получение пунктов выпадающего списка на JavaScript

// console.log(document.querySelectorAll('#select option'));

// let select = document.querySelector('#select')

// for (let option of select){
//      option.textContent += ` ` + option.value
// }


//Работа с пунктами выпадающего списка на JavaScript


// let select = document.querySelector('#select');
// let option = select[0];
// for (let option of select){
//     if (option.selected){
//         option.text += "!"
//     } else{
//         option.text += "?"
//     }
// }

//Выбор пункта списка

// let select = document.querySelector('#select')
// let btn = document.querySelector('#btn')
// let option = select[2];

// btn.addEventListener('click', function(){
//     for(let option of select){
//         option.selected = true;
//     }
// })


// let select = document.querySelector('#select')
// let button = document.querySelector('#btn')


// button.addEventListener('click', function(){
//     for(let elem of select){
//         if(elem.selected){
//             elem.textContent += '!'
//         }
//     }
    
// })


//Поиск ошибок в коде с формами в JavaScript

//№1


// let textarea = document.querySelector('textarea')
// let div = document.querySelector('div')
// textarea.addEventListener('blur', function(){
//     div.textContent = textarea.value
// })

//№2


// let inp = document.querySelector('input');
// console.log(inp)
// let button = document.querySelector('button');
// let div = document.querySelector('div');

// button.addEventListener('click', function() {
// 	if (inp.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	}
// });

//№3

// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });


//Основы работы с объектом Event в JavaScript


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
//     console.log(event);

// });


//Координаты события в JavaScript

// let elem = document.getElementById('elem');

// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// let elem = document.querySelector('#el')
// elem.addEventListener('mousemove', function(event){
// elem.innerHTML = event.clientX + ' : ' + event.clientY
// })


//Тип события в объекте Event в JavaScript


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
// 	if(event.type === 'click'){
//         elem.style.backgroundColor = 'green'
//     } else if (event.type = 'dblclick'){
//         elem.style.backgroundColor = 'red'
//     }
// }


//Элемент события в объекте Event в JavaScript

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет наш абзац
// 	console.log(this);         // выведет наш див
// });

// let ul = document.querySelector('#elem')
// ul.addEventListener('click', function(event){
//    console.log(event.target)
//    console.log(this)
//    if(event.target.tagName === 'LI'){
//     event.target.textContent += '!'
//    }else if (event.target.tagName === 'UL') {
//     let newLi = document.createElement('li');
//     newLi.textContent = 'New text';
//     elem.appendChild(newLi);
//   }
   
// })

// const buttons = document.querySelectorAll('.btn')
// console.log(buttons)

// const handleClick = (event)=>{
//     console.log(event.target)
//     console.log(event.currentTarget)
//     event.stopPropagation()
// }
// window.addEventListener('click', function(){
//     console.log('Window click')
// })

// for(let elem of buttons){
//     elem.addEventListener('click', handleClick)
// }


//Получение нажатых клавиш в JavaScript


// let elem = document.querySelector('input');
// elem.addEventListener('keydown', function(event) {
// 	console.log(event.key);
//     console.log(event.code);
// });


// let input = document.getElementById('myInput');
// let output = document.getElementById('output');

// input.addEventListener('keydown', function(event) {
//   let key = event.key;
//   let code = event.code;
//   output.textContent = `Вы нажали клавишу "${key}" (код клавиши: ${code})`;
// });

// let input = document.querySelector('#inp')
// let p = document.querySelector('p')

// input.addEventListener('keydown', function(event){
//     if(event.key === 'Enter'){
//         p.textContent = input.value
//         input.value = ''
//     }
// })

//Отслеживание клавиш-модификаторов в JavaScript


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		console.log('нажат Ctrl');
// 	}
	
// 	if (event.altKey) {
// 		console.log('нажат Alt');
// 	}
	
// 	if (event.shiftKey) {
// 		console.log('нажат Shift');
// 	}
// });

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', function(event){
//     if(event.shiftKey){
//         elem.style.backgroundColor = 'red'
//     }
// })


// let elem = document.querySelectorAll('#elem')
// for(let el of elem){
//    el.addEventListener('click', function(event){
//     if(event.shiftKey){
//         event.target.textContent += '!'
//     }
//    })
// }


//Отмена действия по умолчанию в JavaScript
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
// });

// const elem = document.querySelector('#elem')

// elem.addEventListener('click', function(event){
//     let attrbut = elem.getAttribute('href')
//     elem.textContent += attrbut
//     event.preventDefault()
// })

// const inp1 = document.querySelector('#inp1')
// const inp2 = document.querySelector('#inp2')
// const p = document.querySelector('p')
// const a = document.querySelector('a')

// a.addEventListener('click', function(event){
//     p.textContent = +inp1.value + +inp2.value
//     event.preventDefault()
// })


//Всплытие событий в JavaScript

// let red = document.querySelector('.red')
// let green = document.querySelector('.green')
// let blue = document.querySelector('.blue')

// red.addEventListener('click', function(){
//     console.log('red')
// })
// green.addEventListener('click', function(){
//     console.log('green')
// })
// blue.addEventListener('click', function(){
//     console.log('blue')
// })


//Получение целевого элемента при всплытии событий


// let div = document.querySelector('div');

// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('p')) {
// 		console.log('клик именно по абзацу');
// 	}
// });



// let elems = document.querySelector('div')
// elems.addEventListener('click', function(event){
//     if(event.target.matches('div')){
//         console.log('клик именно по диву');
//     }
//     if(event.target.matches('ul')){
//         console.log('клик именно по ul');
//         let newLi = document.createElement('li');
//         newLi.textContent = 'New text';
//         elems.appendChild(newLi);
//     }
//     if(event.target.matches('li')){
//         console.log('клик именно по li');
//         event.target.textContent += '!'
//     }
// })


//Прекращение всплытия событий в JavaScript



// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');

// button.addEventListener('click', function(event) {
// 	block.classList.add('active');
//     event.stopPropagation(); // остановим всплытие

//     //event.stopImmediatePropagation(); // Немедленное прекращение 
// });

// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

//Погружение событий в JavaScript

// let red = document.querySelector('.red')
// let green = document.querySelector('.green')
// let blue = document.querySelector('.blue')

// red.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// red.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);

// green.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// green.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);

// blue.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// blue.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// }, false);


//Навешивание обработчиков на новые элементы в JavaScript


// let button = document.querySelector('button');
let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// console.log(items)

// for (let item of items) {
// 	item.addEventListener('click', function() {
// 		this.textContent = this.textContent += '!';
// 	});
// }

// list.addEventListener('click', function(event) {
// 	console.log(this);         // наш список
// 	console.log(event.target); // пункт списка
// });


// list.addEventListener('click', function(event) {
// 	event.target.innerHTML = event.target.innerHTML + '!';
// });
// button.addEventListener('click', function(event) {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
    
//     // item.addEventListener('click', function() { // обработчик клика
// 	// 	this.innerHTML = this.innerHTML + '!';
// 	// });
//     // item.addEventListener('click', handler);
// 	list.appendChild(item);
// });

// function handler() {
// 	this.innerHTML = this.innerHTML + '!';
// }

// for (let item of items) {
// 	item.addEventListener('click', handler);
// }


//Универсальное делегирование событий


// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
	
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });



//Основы работы с контекстом в JavaScript


// let elem = document.querySelector('#elem')
// let elem2 = document.querySelector('#elem2')

// elem.addEventListener('blur', func)
// elem2.addEventListener('blur', func)

// function func (){
//     console.log(this.value)
// }

//Контекст непривязанной функции в JavaScript


// function func (){
// console.log(this)
// }
// func()


//Потеря контекста в JavaScript

// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value); // что выведет?
	
// 	function child() {
// 		console.log(this.value); // что выведет?
// 	}
// 	child();
// }


//Решение проблемы с контекстом в JavaScript

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     let self = this
// 	alert( square() );
	
// 	function square() {
// 		return self.value * self.value
// 	}
// }


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
//     child(this)
	
// 	function child(param) {
// 		return alert(param.value * param.value)
// 	}
// }


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
//     this.value
	
// 	 let child = () => {
// 		return alert(this.value * this.value)
// 	}
//     child()
// }



// Привязывание контекста через метод call в JavaScript


// let elem = document.querySelector('#elem');
// function func() {
// 	console.log(this.value); // выведет value инпута
// }
// func.call(elem);

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')

// function func() {
// 	console.log(this.value);
// }

// func.call(elem1)
// func.call(elem2)
// func.call(elem3)


// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem, 'Smit', 'John'); // тут должно вывести 'hello, John Smit'


//Привязывание контекста через метод apply в JavaScript


// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem, ['Smit', 'John']); // тут должно вывести 'hello, John Smit'



//Привязывание контекста через метод bind в JavaScript



// let elem = document.querySelector('#elem');
// function func(param1, param2) {
// 	console.log(this.value + param1 + param2);
// }
// let newFunc = func.bind(elem)
// newFunc('1', '2')



// let elem = document.getElementById('elem');

// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// // тут напишите конструкцию с bind()

// func = func.bind(elem)
// func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'



//Таймеры



// let elem = document.querySelector('div')
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(){
//     setInterval(function() {
//         elem.style.backgroundColor = 'green'
//     }, 2000);
    
// })


//Счетчик через функцию setInterval в JavaScript


// let i = 0;
// setInterval(function() {
// console.log(++i);
//    
	
// }, 1000);


// let i = 10;

// setInterval(function(){
//     console.log(--i)
// }, 1000);


//Остановка таймера JavaScript


// let i = 0;

// let timerId = setInterval(function() {
// 	console.log(++i);
	
// 	if (i >= 5) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// let i = 10;

// let timerId = setInterval(function(){
//     console.log(i--)
//     if (i === 0){
//         clearInterval(timerId)
//     }
// }, 1000);


//Кнопка для запуска таймера на JavaScript


// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 0;
	
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
// });

// let btn = document.querySelector('#start')
// let i = 100

// btn.addEventListener('click', function func(){
    
//     let timerId = setInterval(function(){
//         console.log(i--)
//         if(i <= 95){
//             clearInterval(timerId)
//         }
//     }, 1000)
//     this.removeEventListener('click', func)
    
// })


//Кнопки для запуска и остановки таймера на JavaScript


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId

// start.addEventListener('click', function() {
// 	let i = 0;
	
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });

// // Останавливаем таймер:
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });



// let start = document.querySelector('#start')
// let stop = document.querySelector('#stop')
// let i = 100;
// let timerId
// start.addEventListener('click', function (){

    
//     timerId = setInterval(function(){
//         console.log(i--)
//         if (i === 90){
//             clearInterval(timerId)
//         }
//     }, 1000)
//     stop.addEventListener('click', function(){
//         clearInterval(timerId)
//     })
// })



// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function func() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
//     this.removeEventListener('click', func)
// });

// stop.addEventListener('click', function func2() {
// 	clearInterval(timerId);
//     start.addEventListener('click', func2)
// });


//Практика на таймеры и работу с DOM в JavaScript


// let elem = document.querySelector('#elem');

// let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) +1;
//     if(elem.value >= 5){
//         clearInterval(timerId)
//     }
// }, 1000);

// let elem = document.querySelector('#elem')

// let timerId = setInterval(function(){
//     elem.value = Number(elem.value - 1)
//     if(elem.value == 0){
//         clearInterval(timerId)
//     } 

// }, 1000);

// let elem = document.querySelector('p')
// let timerId = setInterval(function(){
//     elem.textContent = Number(elem.textContent) +1
//     if(elem.textContent == 5){
//         clearInterval(timerId)
//     }
// }, 1000)

//  Таймеры и потеря контекста в JavaScript


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let a = this
// 	setInterval(function() {
// 		console.log(a.value); // будет выводится undefined
// 	}, 1000);
// });
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		console.log('!!!'); // что-нибудь выводим в консоль
// 	}, 1000);
// });


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let safe = this
    
// 	setInterval(function() {
//         safe.value = Number(safe.value) +1
		
// 	}, 1000);
// });
// elem.addEventListener('click', function(){
//     setInterval(() => this.value = Number(this.value)+1, 1000 )
// })


//Передача контекста параметром функции setInterval

// let elem = document.querySelector('#elem');

// const handleInterval = () => {
//     let newEl = this
// 	const initialInterval = setInterval(function() {
// 		newEl.value = Number(newEl.value) -1
// 	}, 1000);
// }

// elem.addEventListener('click', handleInterval)

// elem.removeEventListener("click", function() {
//     clearInterval(initialInterval)
// })


// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let safe = this
//     let el 
// 	el = setInterval(function() {
// 		safe.value = Number(safe.value) -1
//         if(safe.value == 5)[
//             clearInterval(el)
//         ]
// 	}, 1000);
// });

// elem.addEventListener('click', function() {
//     let timerId
// 	timerId = setInterval(function(safe) {
// 		safe.value = Number(safe.value) -1
//         if(safe.value == 0){
//             clearInterval(timerId)
//         }
// 	}, 1000, this)
// });

// Практика на таймеры и работу с DOM в JavaScript

//1
// let btn = document.querySelector('#btn')
// let p = document.querySelector('p')
// btn.addEventListener('click', function(){
//     setInterval(function(){
//         p.textContent = Number(p.textContent) +1
//     }, 1000)
// })

//2
//========= Идет замыкание на кнопки
// let btn = document.querySelector('#btn')
// let p = document.querySelector('p')
// btn.addEventListener('click', function(){
//     let timerId
//     timerId = setInterval(function(safe){
//         safe.textContent = Number(safe.textContent-1)
//             if(safe.textContent == 0){
//                 clearInterval(timerId)
//         }
//     }, 1000, this)

// });
//=========

// let btn = document.querySelector('#btn')
// let p = document.querySelector('p')
// btn.addEventListener('click', function(){
//     let timerId
//     timerId = setInterval(function(){
//         p.textContent = Number(p.textContent)-1
//         if(p.textContent == 0){
//             clearInterval(timerId)
//         }
//     }, 1000)
// })

//№3

// let input = document.querySelector('#input')
// setInterval(function(){
//     input.value = input.value * input.value
// }, 1000)

//4

// let input = document.querySelector('#input')
// let p = document.querySelector('p')
// input.addEventListener('blur', function(){
//     let timerId
//     //let newP = p
//     timerId = setInterval(function(){
//        p.textContent = --input.value
//        if(input.value == 0){
//         clearInterval(timerId)
//        }
//     }, 1000)
// })

//5

// let input = document.querySelector('#input')
// let btn = document.querySelector('#btn')
// let p = document.querySelector('p')
// btn.addEventListener('click', function(){
//     p.textContent = input.value
//     let timerId 
//     timerId = setInterval(function(){
//         p.textContent--
//         if(p.textContent == 0){
//             clearInterval(timerId)
//         }
//     }, 1000)
// })


//6

// let start = document.querySelector('#start')
// let stop = document.querySelector('#stop')
// let p = document.querySelector('p')

// start.addEventListener('click', function func(){
//     let safe = this
//     let timerId
//     timerId = setInterval(function(){
//         p.textContent = Number(p.textContent) +1
        
//     }, 1000)
//     stop.addEventListener('click', function(){
//         clearInterval(timerId)
//     })
// })

//7

// let p = document.querySelector('p')
// let isRed = true
// setInterval(function(){
//     if(isRed){
//         p.style.color = 'green'
//     } else{
//         p.style.color = 'red'
//     }
//     isRed = !isRed
//     // p.style.color = 'red'
//     // p.style.color = 'green'
//     // if(p.style.color == 'red'){
//     //     p.style.color = 'green'
//     // }
// }, 1000)

//8

// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('time').textContent = timeString;
//   }

//   // Update the clock immediately and then every second
//   updateClock();
//   setInterval(updateClock, 1000);

  
//Задержка перед выполнением в JavaScript


//   let elem = document.querySelector('#elem');
//   elem.addEventListener('click', function() {
// 	setTimeout(function() {
// 		alert('Hi, Alex !!');
// 	}, 3000);
// });


// let text = document.querySelector('p')
// setTimeout(function(){
// text.textContent = 'Hello Alex, this is Lux'
// }, 5000)


//Создание и вставка элементов на JavaScript

