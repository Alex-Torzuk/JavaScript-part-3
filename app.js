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