const a=15;
let num1=0;
let num2=1;
let num3;
let num4="";
let num5=" ";
for(let i=1; i<=a; i++){
    
    // console.log(num1);
    num4=num4+num1+num5;
    num3=num1+num2;
    num1=num2;
    num2=num3;
    
    //console.log(num1);
}
console.log("");
console.log(`Fibonacci Series : ${num4}`);