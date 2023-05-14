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

    var totalWords = trimmedString.split(" ").length;
    console.log(`Total words in string : ${totalWords}`);

    //print the index of word "Good" in string

    var goodIndex = trimmedString.indexOf("good");
    console.log("Index of good is :",goodIndex);

    //print the substring starting from index 22 using substring and sliice

    var substring = trimmedString.substring(22);
    var slice = trimmedString.slice(22);
    console.log(`Substring using substring(): ${substring}`);
    console.log(`Substring using slice(): ${slice}`);

    //check, is string is end with "up"

    var endWithUp = trimmedString.endsWith("up");
    console.log("Is string end with UP :", endWithUp);

    //check, is string start with "Hey"
    var startWithHey = trimmedString.startsWith("Hey");
    console.log("String starts with Hey :",startWithHey);




}
stringHandsOn();