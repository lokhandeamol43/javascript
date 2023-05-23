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
  
console.log("");

  const string1 = "I AM Learning JavaScript, The Language of internet";
  const count1 = countCharA(string1);
  console.log("Given string :", string1);
  console.log("Count of 'a' or 'A' in string:", count1);

  console.log("-------------------------------------------------------------------------------");
  
  const string2 = "My favourite movie is LAggAn";
  const count2 = countCharA(string2);
  console.log("Given string :", string2);
  console.log("Count of 'a' or 'A' in string:", count2);