// print 5 to 15

let i=5; let j=""; 
while(i<=15){
    j=`${j.concat(i)} `;
    i++;
}
console.log(`1. Print numbers from 5 to 15: ${j}.`);
console.log("");

//print 50 to 40 number

var a=50;
var b="";

while (a>=40) {
    b=`${b.concat(a)} `;
    a--;
}
console.log(`2. Print numbers from 50 to 40: ${b}.`);
console.log("");

//first 15 odd numbers

var a=1;
var b="";
while (a<=30) {

    if (a%2!==0) {
        b=`${b.concat(a)} `;
    }
    a++;
}
console.log(`3. First 15 Odd numbers: ${b}.`);
console.log("");

//first 10 even numbers

var a=0;
var b="";
while (a<20) {
    if (a%2==0) {
        b=`${b.concat(a)} `;
    }
    a++;
}
console.log(`4. First 10 Even numbers: ${b}.`);
console.log("");

// print table of 5

var a = 1;
var b="";
while (a<=10) {
    b=`${b.concat(a*5)} `; 
    a++;   
}
console.log(`5. Table of 5: ${b}.`);
console.log("");

//print table of 10
var a = 1;
var b="";
while (a<=10) {
    b=`${b.concat(a*10)} `; 
    a++;   
}
console.log(`6. Table of 10: ${b}.`);

console.log("");

//print reverse table of 10

var a=10;
var b="";
while(a>=1){
    b=`${b.concat(a*10)} `; 
    a--;  
}
console.log(`7. Table of 10 in Reverse order: ${b}.`);


