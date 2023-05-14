//Function Expression to get the square of a number

var square = function (num) {
    var result = num*num;
    return result;
}

console.log("Square of 5 is :",square(5));
console.log("Square of 6 is :",square(6));
console.log("Square of 25 is :",square(25));
console.log("Square of 100 is :",square(100));
console.log("--------------------------------------------------------------------------------------");
//Check and log the type of function

console.log("Type of square is :",typeof square);
console.log("--------------------------------------------------------------------------------------");

// Function Expression to get the area of a rectangle plot
 var calculateRectangleArea = function(length, width){
    return length*width;
 }
 var rectangleArea=calculateRectangleArea(499, 917);
 console.log("Area of Rectangle plot :",rectangleArea);
 console.log("--------------------------------------------------------------------------------------");
 //Function Expression to swap values

 var swapValues = function(value1, value2) {
   console.log("Before swap: value1 =", value1, "value2 =", value2);
    
    // Swapping the values
   var temp=value1;
   value1=value2;
   value2=temp;
    
console.log("After swap: value1 =", value1, "value2 =", value2);
}
swapValues("Virat", "Anushka")

console.log("--------------------------------------------------------------------------------------");

swapValues(1000, 2000)
console.log("--------------------------------------------------------------------------------------");
//Function Expression to perform operations on a string


var stringOperations = function(str){

    console.log("Total character available in string is :",str.length);
    
    console.log("--------------------------------------------------------------------------------------");
    
    console.log("Charater at 6 :",str.charAt(6));
    console.log("Character at 11 :",str.charAt(11));
    
    console.log("--------------------------------------------------------------------------------------");
    
    var charAtLastIndex=str.charAt(str.length-1);
    console.log("Last character of string :", charAtLastIndex);
    
    console.log("--------------------------------------------------------------------------------------");
    
    var firstChar=str.charAt(0);
    console.log("First Character of string :",firstChar);
    
    console.log("--------------------------------------------------------------------------------------");
    
    var wordsCount=str.split(" ").length;
    console.log("Total number of words in given string :", wordsCount);
    
    console.log("--------------------------------------------------------------------------------------");
    
    var squareOfWurdsCount=square(wordsCount);
    console.log("Square of the words count :", squareOfWurdsCount);

}
stringOperations("JS the most popular language of internet")
