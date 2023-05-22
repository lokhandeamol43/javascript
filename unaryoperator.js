var num1 = 5;
var num1 = num1 + 1;
console.log(`${num1}`);

console.log(`Increment operator - post fix`);
var num2 = 10;
var num2 = num2++;// num2 + 1 = 11 
console.log(` post Increment operator:  ${num2}`);

console.log(`Increment operator - pre fix`);
var num3 = 15;
var num3 = ++num3;// num3 + 1 = 16
console.log(` post Increment operator:  ${num3}`);

console.log(`Decrement operator - post fix`);
var num4 = 20;
var num4 = num4--;// num4 - 1 = 
console.log(` post Increment operator:  ${num4}`);

console.log(`Decrement operator - post fix`);
var num5 = 30;
var num5 = --num5;// num4 - 1 = 
console.log(` post Increment operator:  ${num5}`);




var num1;//
num1 = num1++; // undefined + 1 ==> NaN
console.log(`${num1}, type of NaN is ${typeof num1}`);

console.log(`${0/0}`);

var numTwo = "200";
numTwo = numTwo++; // 200 + 1
console.log(`${numTwo}`);

var num3 = "Ten";// "10" ==> 10
num3 = --num3; 
console.log(`${num3}`);

var city = "Pune";
var result = +city;
console.log(`${result}`);

var num5 = "100";
var result = +num5;
console.log(`Result is ${result} and it's type is: ${typeof result}`);