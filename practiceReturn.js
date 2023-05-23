var isEvenOrOddNum = function(num){
    var result = num % 2 == 0 ? true : false;
    return result;
}
console.log("Is 29 even  :",isEvenOrOddNum(29));
console.log("Is 44 even :",isEvenOrOddNum(44));
console.log("Is 0 even :",isEvenOrOddNum(0));
console.log("Is 101 even :",isEvenOrOddNum(101));
isEvenOrOddNum(200);
console.log("------------------------------------------------------------------");

var isEvenOrOddNum = function(num){
    var result = num % 2 == 0 ? true : false;
    console.log(`Is ${num} even :`,result);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);