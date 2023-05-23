console.log("");
const arrayFruits= ["Banana","Orange","Apple","Mango","Watermelon"];
console.log(`Given Array : ${arrayFruits}`);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

//first element
const firstElement = arrayFruits[0];
console.log(`First element of given array is ${firstElement}.`);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

//last element
let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`Last element of given array is ${lastElement}.`);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

// add element Papaya before Banana
arrayFruits.unshift("Papaya");
console.log("After adding 'Papaya':", arrayFruits);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");


// removing Mango from the array
let removeMango = arrayFruits.splice(4,1)
console.log("Removing element is :",removeMango);
console.log("After removing Mango':", arrayFruits);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

// add element at last position
arrayFruits.push("Pineappple");
console.log("After adding 'Pineapple':", arrayFruits);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

// insert an element
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log("After inserting 'Dragon Fruit':", arrayFruits);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

// replace element
arrayFruits.splice(2, 1, "Kiwi");
console.log("After replacing 'Orange' with 'Kiwi':", arrayFruits);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

//elements between index 1 to 4
var arraySlice=arrayFruits.slice(1, 4);
console.log("Elements from index 1 to 4:", arraySlice);
console.log("-----------------------------------------------------------------------------------------------------------------------------------");

// last three elements 
console.log(arrayFruits);
//var lastThreeElements = arrayFruits.slice(4);
var lastThreeElements = arrayFruits.slice(arrayFruits.length - 3);
console.log("Last 3 elements:", lastThreeElements);

console.log("-----------------------------------------------------------------------------------------------------------------------------------");

