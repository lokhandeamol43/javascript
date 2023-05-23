function factorialOfNum(num) {

    var factorial=num;
    if(typeof factorial=='number'){
    for (let i = 1; i < num; i++) {
        factorial = factorial * i;
    }
    console.log(`Factorial of ${num} : ${factorial}`);
    
}else{
    console.log(factorial, "is invalid value.");
}
console.log("-------------------------------------------------------");
}

console.log("=================== Factorial Number ===================");
console.log("");
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);