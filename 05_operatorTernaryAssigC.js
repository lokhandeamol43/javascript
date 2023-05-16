function maleMarriageEligibility(gender, age, name){

    var msg = gender === "Male" && age>=21 ? `Hey ${name} you are eligible for marriage` : `Hey ${name} you are not eligible for marriage`;
    return msg;
}
console.log("Marriage eligibility criteria for Male : age>=21");
console.log(" ");
console.log(maleMarriageEligibility("Male", 25, "Michael Johnson"));
console.log(maleMarriageEligibility("Male", 17, "James Anderson"));

console.log("-----------------------------------------------------------------------------------------------");

function femaleMarriageEligibility(gender, age, name) {

    var msg = gender === "Female" && age>=18 ? `Hey ${name} you are eligible for marriage` : `Hey ${name} you are not eligible for marriage`;
    return msg;
}
console.log("Marriage eligibility criteria for Female : age>=18");
console.log(" ");
console.log(femaleMarriageEligibility("Female", 20, "Olivia Smith"));
console.log(femaleMarriageEligibility("Female", 17, "Emma Johnson"));

    


