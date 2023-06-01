const a=10;
let num1=0;
let num2=1;
let num3;

for(let i=1; i<=a; i++){
    
    console.log(num1);
    num3=num1+num2;
    num1=num2;
    num2=num3;

    //console.log(num1);
}

// function fibonacci(n) {
//     let a = 0, b = 1, c;
//     console.log(a);
//     console.log(b);
//     for (let i = 2; i < n; i++) {
//       c = a + b;
//       console.log(c);
//       a = b;
//       b = c;
//     }
//   }
  
// fibonacci(10);