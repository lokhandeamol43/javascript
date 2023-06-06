const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("Given array: ", arrayNumbers);
console.log("");

// 1. Add 10 to each element
console.log("===== Add 10 to each element =====");
console.log("");
const newArray1 = arrayNumbers.map((num) => num + 10);
console.log(newArray1);
console.log("");

// 2. Square each element
console.log("===== Square of ecah element =====");
console.log("");
const newArray2 = arrayNumbers.map((num) => num * num);
console.log(newArray2);
console.log("");

// 3. Add index value to each element
console.log("===== Add the index value into its corresponding each array element  =====");
console.log("");
const newArray3 = arrayNumbers.map((num, index) => num + index);
console.log(newArray3);
