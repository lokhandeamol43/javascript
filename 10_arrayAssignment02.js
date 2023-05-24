console.log("");
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]

//array length and elements 
console.log(`Given Array : ${arrayNumbers}`);
let arrayLength=arrayNumbers.length;
console.log(`Total length of given array: ${arrayLength}`);

console.log("--------------------------------------------------------------------------------------------");

//first element and last element\
 const firstElement = arrayNumbers[0];
 console.log(`First Elelment of Array : ${firstElement}`);

 const lastNumber = arrayNumbers[arrayLength-1];
 console.log(`Last Element of Array : ${lastNumber}`);



 //third last element
const thirdNumber = arrayNumbers[arrayLength-3]
console.log(`Last Third element of Array : ${thirdNumber}`);

console.log("--------------------------------------------------------------------------------------------");

// for in loop for even numbers

for (const index in arrayNumbers) {
    
    const num = arrayNumbers[index];
    if (num % 2 == 0) {
        console.log(`Even Number : ${num}`);
    }
}
console.log("--------------------------------------------------------------------------------------------");

// for in loop for odd numbers

for (const i in arrayNumbers) {
    const odd = arrayNumbers[i]
    if (odd % 2 !== 0){  
        console.log(`Odd Number : ${odd}`);
    }
}
console.log("--------------------------------------------------------------------------------------------");

//sum of even positioned numbers

let evenPosition=0;
for (const index in arrayNumbers) {
  if (index % 2 === 0) {
    evenPosition = evenPosition + arrayNumbers[index];
  }
}
console.log(`Sum of even positioned numbers : ${evenPosition}`);
console.log("--------------------------------------------------------------------------------------------");

//sum of odd positioned numbers
let oddPosition=0;
for (const index in arrayNumbers) {
  if (index % 2 !== 0) {
    oddPosition = oddPosition + arrayNumbers[index];
  }
}
console.log(`Sum of odd positioned numbers : ${oddPosition}`);

console.log("--------------------------------------------------------------------------------------------");

//sum of all elements 

let total=0;

for(let index=0; index<arrayNumbers.length; index++){
    total=total+arrayNumbers[index];
}
console.log(`Sum of all numbers : ${total}`);

// alternate way using for of loop
// let sum = 0;
// for (const number of arrayNumbers) {
//   sum=sum+number;
// }
// console.log(sum);
console.log("--------------------------------------------------------------------------------------------");

//find numbers which is divisible by 5
console.log("Number which are multiple of 5:");
for (const number of arrayNumbers) {
    if (number % 5 === 0) {
        console.log(number);
    }
}
console.log("--------------------------------------------------------------------------------------------");

// is number 115 and 23 available in arraNumbers?

var check = arrayNumbers.includes(115);
console.log(`Number 115 is available in array : ${check}`);
var check = arrayNumbers.includes(23);
console.log(`Number 23 is available in array : ${check}`);
console.log("--------------------------------------------------------------------------------------------");

//insert 55, 66 before index 3

var insert = arrayNumbers.splice(2, 0, 55, 66);
console.log(`After adding numbers :`);
console.log(arrayNumbers);
console.log("--------------------------------------------------------------------------------------------");

//delete three elements from index 4

var remove = arrayNumbers.splice(4, 3);
console.log(`After deleting three elements from index 4 :`);
console.log(arrayNumbers);
console.log("--------------------------------------------------------------------------------------------");