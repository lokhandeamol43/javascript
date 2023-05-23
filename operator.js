console.log(`Addition operator +`);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log(`Addition is ${result}`);

console.log(`Subtraction operator -`);
var num1 = 10;
var num2 = 20;
var result = num1 - num2;
console.log(`Subtraction is ${result}`);

console.log(`Multiplication operator *`);
var num1 = 10;
var num2 = 20;
var result = num1 * num2;
console.log(`Multiplication is ${result}`);

console.log(`Exponentiation operator **`);
var num1 = 2;
var num2 = 3;
var result = num1 ** num2;
console.log(`Exponentiation is ${result}`);

console.log(`Division operator /`);
var num1 = 20;
var num2 = 3;
var result = num1 / num2;
console.log(`Division is ${result}`);

console.log(`Modulus operator %`);
var num1 = 20;
var num2 = 3;
var result = num1 % num2;
console.log(`Modulus is ${result}`);

console.log(`Even number check`);
var num1 = 20;
var num2 = 13;
var result = num1 % 2;
var res = num2 % 2;
console.log(` Even check: ${result} `);
console.log(` Even check: ${res} `);

console.log(` Compound Addition  +=`);
var num1 = 10;
var num2 = 20;
num2+=num1; // num2 = num2 + num1;
console.log(`Compound Addition is ${num2}`);


//======================================================

console.log(`Equal operator ==`);
var num1 = 10;
var num2 = 20;
var result = num1 == num2;
console.log(`Equality is ${result}`);

var num1 = 100;
var num2 = "100";
console.log(`Type of num1 -> ${typeof num1} and Type of num2 -> ${typeof num2}`);
var result = num1 == num2;
console.log(`Equality is ${result}`);

var num3 = "200";
console.log(`Type of num1 -> ${typeof num3}`);
var num4 = + num3;
console.log(`Type of ${num4} -> ${typeof num4}`);

var num5 = "pune";
var num6 = +num5;
console.log(`Explicit conversion from "pune" to number is: ${num6}`);


console.log(`Strictly Equal operator ===`);
var num1 = 100;
var num2 = "100";
var result = num1 === num2;
console.log(`Strict Equality is ${result}`);

console.log(`Not Equal operator !=`);
var num1 = 10;
var num2 = 20;
var result = num1 != num2;
console.log(`Not Equality ==> ${result}`);

console.log(` Not Equal operator !=`);
var num1 = 50;
var num2 = "50";
var result = num1 != num2;
console.log(`Not Equality ==> ${result}`);

console.log(`Strict Not Equal operator !==`);
var num1 = 50;
var num2 = "50";
var result = num1 !== num2;
console.log(`Not Equality ==> ${result}`);

console.log(`Less than operator <`);
var num1 = 50;
var num2 = 60;
var result = num1 < num2;
console.log(`Less than Result ==> ${result}`);

console.log(`Less than operator <`);
var num1 = 50;
var num2 = 50;
var result = num1 < num2;
console.log(`Less than Result ==> ${result}`);

console.log(`greater than operator >`);
var num1 = 50;
var num2 = 60;
var result = num1 > num2;
console.log(`greater than Result ==> ${result}`);

console.log(`greater than operator >`);
var num1 = 60;
var num2 = 60;
var result = num1 > num2;
console.log(`greater than Result ==> ${result}`);

console.log(`greater than equal operator >=`);// 
var num1 = 60;
var num2 = 60;
var result = num1 >= num2;
console.log(`greater than Result ==> ${result}`);

console.log(`less than equal operator <=`);// 
var num1 = 60;
var num2 = 60;
var result = num1 <= num2;
console.log(`greater than Result ==> ${result}`);

var a="javascript";
var b=a.split(" ");
console.log(b);
console.log(b.length);

var a="google chrome";
var b=a.split(" ").length;
console.log(b);

var isAssignmentDone =false;
var result= isAssignmentDone ? " You will get job " :  "You will not get Job";
console.log(result);

//ternary operator
var isAssignmentDone = true;
var result= isAssignmentDone ? " You will get job " :  "You will not get Job";
console.log(result);

var amarSSC = 57;
var amarHSC = 89;
var result = amarSSC>=55 && amarHSC >=60 ? " Allowed for interview" : "Sorry, Not allowed";
console.log(`${result}`);

var rahulAge = 17;
var result = rahulAge>=18 ? "You are eligible for vote" : "Not try next time";
console.log(`${result}`);

var candidateName = "Jenny";
var age = 23
var gender = "male";

var result = (gender=="female" && age>=18) || (gender=="male" && age>=21)  ? "You are eligible" : "No you are not eligible";
console.log(`${result}`);

var num1 = 13;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`${result}`);


