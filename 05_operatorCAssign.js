var tcsinterviewEligibility = function(gradScore, hscScore, sscScore, candidateName){

    var  result = gradScore >= 70 || hscScore >= 80 || sscScore >=90 ? `Congrats ${candidateName} you are eligible for TCS interview.` : `Unfortunately ${candidateName} you are not eligible for interview.`;
    console.log(result);
    console.log("-------------------------------------------------------------------------------");
}
console.log("================= Eligibility criteria for TCS interview ======================");
console.log("");
tcsinterviewEligibility(70, 65, 55, "Bill")
tcsinterviewEligibility(80, 86, 90, "John");
tcsinterviewEligibility(60, 79, 88, "Linda");
