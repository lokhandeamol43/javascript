// vowels count

var str = "I am very good IT Developer";
var char=str.toLowerCase();
var count=0;

for(let index=0; index<=str.length; index++){


  var char1= char.charAt(index);
      if (char1=='a' || char1=='e' || char1=='i' || char1=='o' || char1=='u' )
            // ||  char=='A' || char=='E' || char=='I' || char=='O' || char=='U' 
            {
      //  console.log(char);
        count++;
    }
}

console.log("");
console.log("Given String is :",str);
console.log("Total number of vowels in string are :",count);
console.log("");
console.log("-----------------------------------------------------------------");


//sum of cubes

function sumOfCube() {
var total=0;
  for(let index=1; index<=5; index++){
   var cube=index*index*index;
   total=total+cube;
   console.log("Cube of", index, ":", cube);
  }
  console.log("Total sum of cubes :",total);
}
sumOfCube();

console.log("-----------------------------------------------------------------");
console.log("");
// Odd characters

var string1 = "Hard work always pays back";
var string2 = "Soon I will be Angular IT Champ";

var odd=""; var spaces=" "; 
function oddCharacters(s){
    var s1=s.split(" ");
for(var i=0; i<s1.length; i++){
    var w=s1[i];
    for(var j=0; j<w.length; j++){
        if (j%2 !== 1 ) {
          odd=odd+w[j]+spaces;
        }
    }
}
console.log(`Odd positioned Characters: ${odd}`);
odd="";
}
console.log(`String :${string1}`);
oddCharacters(string1);

console.log("");

console.log(`String :${string2}`);
oddCharacters(string2);




