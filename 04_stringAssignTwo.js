console.log("------------------Assignment Two----------------------");
console.log("");

function stringHandsOn() {

    var str="  Hey you are doing good, keep it up   ";

    console.log("Original String is:"+str);

    var totalLength=str.length;
    console.log("Total length of string is "+totalLength);

    var trimmedString = str.trim();
    // console.log("Trimmed string:", trimmedString);
    console.log("After removing extra spaces the String length is:", trimmedString.length);
    
    var extraSpacesCount = str.length - trimmedString.length;
    console.log("Total number of extra spaces removed:", extraSpacesCount);

    console.log("First character:", trimmedString[0], "Last character:", trimmedString[trimmedString.length - 1]);
}
stringHandsOn();