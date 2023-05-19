function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName) {

    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        
        console.log(`Congrats ${candidateName}, you are eligible for TCS interview.`);
    } else {
        console.log(`Unfortunately, ${candidateName}, you are not eligible for TCS interview.`);
      }   
    console.log("----------------------------------------------------------------------------------");
}
console.log("========================== TCS Interview Eligibility =============================");
console.log("");
tcsInterviewEligibility(80, 86, 90, "Tony");
tcsInterviewEligibility(70, 65, 55, "Steve");
tcsInterviewEligibility(60, 79, 88, "Bruce");
