console.log("==================Functions with no arguments=================");
function one() {
    
}
console.log("First function with no arguments and no return type.");

function two() {
    
}
console.log("Second function with no arguments and no return type.");
console.log("");

console.log("==================Functions with arguments=================");

function personalDetails(firstName, lastName, collegeName) {

    console.log("First Name: "+firstName);
    console.log("Last Name: "+lastName);
    console.log("College Name: "+collegeName);    
}

personalDetails("Amol", "Lokhande", "JSPM, Pune");
console.log("");

console.log("==================Swap Values=================");

var nameOne="Virat";
var nameTwo="Anushka";

var numOne=1000;
var numTwo=2000;

function swapValuesDude(arg1, arg2) {
    console.log("Before swap: arg1 =", arg1, " arg2 =", arg2);

    var temp=arg1;
    arg1=arg2;
    arg2=temp;
        
    console.log("After swap: arg1 =", arg1, " arg2 =", arg2);
  }

  swapValuesDude(nameOne, nameTwo);
  swapValuesDude(numOne, numTwo);

  console.log("");

  console.log("==================Add Values=================");


  function addThreeValues(valueOne, valueTwo, valueThree) {

    var temp=valueOne+valueTwo+valueThree;

    console.log("Addition : "+temp);    
  }

  addThreeValues(10.23, 600, 40);
  addThreeValues("Hello ", "Good ", "Morning");

