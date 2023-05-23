// var string1 = "Hard work always pays back";
// var string2 = "Soon I will be Angular IT Champ";

// var odd=""; var spaces=" "; 
// function oddCharacters(s){
//     var s1=s.split(" ");
// for(var i=0; i<s1.length; i++){
//     var w=s1[i];
//     for(var j=0; j<w.length; j++){
//         if (j%2 !== 1 ) {
//           odd=odd+w[j]+spaces;
//         }
//     }
// }
// console.log(`Odd positioned Characters: ${odd}`);
// odd="";
// }
// console.log(`String :${string1}`);
// oddCharacters(string1);

// console.log("");

// console.log(`String :${string2}`);
// oddCharacters(string2);






// //====================================================================================================


// function oddPositionedChars(str) {
//     var result="";
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) !== ' ') {
//         result=result+str.charAt(i);
//       } 
      
//     }
//    //console.log(result);
//     var odd="";
//     for(var j=0; j<result.length; j++){
//       if (j%2 !== 1 ) {
//         odd=odd+result.charAt(j);
//       }
//     }
//   console.log(odd);
  
//   }
  
//   var string1 = "Hard work always pays back";
//   var string2 = "Soon I will be Angular IT Champ";
  
//   console.log(`Odd positioned characters in "${string1}":`);
//   oddPositionedChars(string1);
  
//   console.log(`Odd positioned characters in "${string2}":`);
//   oddPositionedChars(string2);
  

//   //===========================================================================

//   var leapYear = function(year) {
//     if (typeof year === 'number') {
//       if (year % 4 === 0  && year % 100 !== 0 || year%  400 === 0) {
//         console.log(year + ' is a leap year.');
//       } else {
//         console.log(year + ' is not a leap year.');
//       }
//     } else {
//       console.log('Invalid input: ' + year + ' is not a valid year.');
//     }
//     console.log("---------------------------------------------------------------");
//   }
  
//   console.log("==================== Leap Year ==========================");
//   console.log("");
  
//   leapYear(2020);
//   leapYear(1999);
//   leapYear(1600);
//   leapYear(2022);
//   leapYear(1945);
//   leapYear(null);
//   leapYear("Twenty Twenty");
//   leapYear(undefined);
//   leapYear(NaN);
//   leapYear(1750);
//   leapYear(1996);
//   leapYear(1900);
  
  
  //(year % 4 === 0  && year % 100 !== 0 || year%  400 === 0)

  // count 'a' and 'A' from string

  // var str1="I AM Learning JavaScript, The Language of internet";
  // var count=0;
  // function countCharacter(String) {

  //   var count=0;

  //  for (let index = 0; index < string.length; index++) {
    
  //       var char= str1.charAt(index);

  //       if(char == a && char == A){
  //         count= count +char;
  //       }
  //  }
    
  // }

  // console.log(count);


  function countCharA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      var char=str.charAt(i);
      if (char === 'a' || char === 'A') {
        count++;
      }
    }
    return count;
  }
  
  // Test with string1
  const string1 = "I AM Learning JavaScript, The Language of internet";
  const count1 = countCharA(string1);
  console.log("Count of 'a' or 'A' in string1:", count1);
  
  // Test with string2
  const string2 = "My favourite movie is LAggAn";
  const count2 = countCharA(string2);
  console.log("Count of 'a' or 'A' in string2:", count2);