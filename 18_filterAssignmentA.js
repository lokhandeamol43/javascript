const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Given array :",arrayNumbers);

//1.find the numbers which are greater than 50.
console.log("");
console.log("====================== Find the numbers which are greater than 50. ======================");
const greater = arrayNumbers.filter( (element)=> {
    return element>=50;
} );
console.log(greater);
console.log("");

//2.find the even numbers
console.log("====================== Even Numbers ======================");
const evenNum = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );
console.log(evenNum);
console.log("");

//3.find the odd numbers
console.log("====================== Odd Numbers ======================");
const oddNum = arrayNumbers.filter( (element)=> {
    return element%2!=0;
} );
console.log(oddNum);
console.log("");

//4.find the numbers which are multiple of 5.
console.log("====================== Numbers which are multiple of 5 ======================");
const multiple = arrayNumbers.filter((element)=> {
    return element%5==0;
} );
console.log(multiple);
console.log("");

//5. find the numbers which are between 20 and 50
console.log("====================== Numbers between 20 and 50 ======================");
const between = arrayNumbers.filter((element)=> {
    return 20<element && element<50;
});
console.log(between);