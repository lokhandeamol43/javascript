function squareOfWordLength(word) {
    
    var l = word.length;
    var square = l*l;

    console.log("Given Word is :",word);

    console.log("Length of word :",l+"  Square of word length :",square);
    
}
squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(" ");
console.log("--------------------------------------------------------------------");

function strnigAction(){

    var str="I am Angular Developer";
    var a = str.length;
    var b = str.split(" ");
    var c = b.length;

    var div = a/c;
    var mlut = a*c;

    console.log("Given String :",str);
    console.log("String Length :",a);
    console.log("Number of words :",c);
    console.log("String Length divide by total number of word in string :",div);
    console.log("String Length multiply by total number of word in string :",mlut);

}

strnigAction();