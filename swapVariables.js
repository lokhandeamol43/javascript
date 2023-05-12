var num1 = 100;
var num2 = 200;
// Output --> num1 = 200,  num2 =100

console.log("Before Swap..", "num1: ", num1, " num2: ", num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log("num1:", num1, " num2:", num2);

function show() {
    console.log("Show function");
}
console.log("Before function call");
show(); // Function call or invoke
console.log("After function");
show();
show();
show();

var numOne = 100;
var numTwo = 200;

var name1 = "Billgates";
var name2 = "Elon Musk";

var fruitApple = "Apple";
var fruitMango = "Mango";

function swapVariables(valueOne, valueTwo){ // Arguments: valueOne =100  valueTwo = 200 var valueThree;
    console.log("Before Swap: ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log("After Swap: ", valueOne, valueTwo);
}
swapVariables(numOne, numTwo); // 100 200
swapVariables(name1, name2);
swapVariables(fruitApple, fruitMango);