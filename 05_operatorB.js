var greaterNumber = function(num1, num2){

    // var result = num1 >= num2 ? num1 : num2;
    var result = num1 >= num2 ? `${num1} is greater `: `${num2} is greater`;
    console.log(`The greater number between ${num1} and ${num2} is: ${result}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("-------------------------------------------------------------------");

var isEvenOrOddNum = function(num){

    var result = num % 2 == 0 ? true : false;
    return result;
//    console.log(result);
}
//isEvenOrOddNum(29)
console.log("Is 29 even :",isEvenOrOddNum(29));
console.log("Is 44 even :",isEvenOrOddNum(44));
console.log("Is 0 even :",isEvenOrOddNum(0));
console.log("Is 101 even :",isEvenOrOddNum(101));

console.log("-------------------------------------------------------------------");

var wordLength = function(word){
    
    var l=word.length;
    var result = l % 2 === 0 ? "EVEN" : "ODD";
    return result;
}

console.log("Word length of 'JavaScript':", wordLength("JavaScript"));
console.log("Word length of 'developer':", wordLength("developer"));
console.log("Word length of 'Google':", wordLength("Google"));

