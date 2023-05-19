function gradeCalculation(marks){

    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) {
        console.log("Please provide valid marks.");                
    } else if(marks>=90) {
        console.log(`Fantastic marks: ${marks}, Your grade is A+.`);
    } else if(marks<90 && marks>=75) {
        console.log(`Excellent marks: ${marks}, Your grade is A.`);
    } else if(marks<75 && marks>=50) {
        console.log(`Good marks: ${marks}, Your grade is B.`);
    } else if(marks<50 && marks>=35) {
        console.log(`Marks: ${marks}, Your grade is C. Need improvement.`);
    } else {
        console.log(`Marks: ${marks}, Your are Fail.`);
    }
    console.log("-----------------------------------------------------------------------");
}
console.log("");
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation (29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);



//===============================================================================================
//  Handling invalid inputs
// gradeCalculation(undefined);
// gradeCalculation(null);
// gradeCalculation(NaN);

// gradeCalculation("Karthik");
// gradeCalculation(-10);
// gradeCalculation(120);

// // Valid input
// gradeCalculation("20");