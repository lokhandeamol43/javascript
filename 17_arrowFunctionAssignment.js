// Arrow function with no args and no return value
const greeting = () => {
    console.log("Good Morning, Today is Monday");
  };
  console.log("============================= Arrow function with no args and no return value =============================");
  console.log("");
  greeting();
  console.log("");
  //---------------------------------------------------------------------------------------------------------------------------------------------
  
  // Arrow function with 3 args and no return value
  const multiply = (num1, num2, num3 = 1) => {
    const result = num1 * num2 * num3;
    console.log(`The result of multiplication is: ${result}`);
  };
  console.log("============================= Arrow function with 3 args and no return value ==============================");
  console.log("");
  multiply(5, 5, 2);
  multiply(10, 4);
  console.log("");

  //-------------------------------------------------------------------------------------------------------------------------------------------------
  // Arrow function with 5 args and return value
  const add = (num1, num2, num3, num4, num5) => {
    const sum = num1 + num2 + num3 + num4 + num5;
    return sum;
  };

  console.log("=============================== Arrow function with 5 args and return value ===============================");
  console.log("");
  const result1 = add(100, 100, 200, 349, 756);
  console.log(`Addition of Numbers is: ${result1}`);
  
  const result2 = add("I am", " learning", " ES6", " features", " in depth");
  console.log(`Addition of Words is: ${result2}`);
  