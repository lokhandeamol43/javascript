const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

// 1. Log the array element with its index using forEach() with an arrow function

console.log("===== Log the Elements with Index =====");

arrayNumbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});
console.log("");

// 2. Find the positive numbers and log them on the console using forEach() with an arrow function
console.log("===== Find the Positive Numbers =====");

console.log("Positive numbers:");
arrayNumbers.forEach((num) => {
  if (num > 0) {
    console.log(num);
  }
});
console.log("");

// 3. Find the negative numbers, add them to a new array, and log the new array on the console using an arrow function
console.log("===== Find Negative Numbers =====");

const negativeNumbers = [];
arrayNumbers.forEach((num) => {
  if (num < 0) {
    negativeNumbers.push(num);
  }
});
console.log("Negative numbers:", negativeNumbers);
console.log("");

// 4. Find the even numbers and log them on the console using forEach() with an arrow function
console.log("===== Find Even Numbers =====");
console.log("Even numbers:");
arrayNumbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});
console.log("");

// 5. Find the sum of all elements from arrayNumbers and log the sum value on the console
console.log("===== Sum of All Numbers =====");
let sum = 0;
arrayNumbers.forEach((num) => {
  sum += num;
});
console.log("Sum of all elements:", sum);
console.log("");

// 6. Log only the even-indexed array values on the console using forEach() with an arrow function
console.log("===== Even Index Array Elements =====");
console.log("Even-indexed elements:");
arrayNumbers.forEach((num, index) => {
  if (index % 2 === 0) {
    console.log(num);
  }
});
