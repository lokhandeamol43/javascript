function voteEligibility(age, name) {
    
    if(age <=0 || age>120 || age==undefined){
        console.log(`Name : '${name}' Age : ${age} - Invalid data, please Enter valid age.`);
    }
    else if(age >0 && age<18){
        console.log(`Name : '${name}' Age : ${age}- Not Eligible for Voting.`);
    }
    else if(age>=18 && age<=120){
        console.log(`Name : '${name}' Age : ${age} - Eligible for Voting.`);
    }
    console.log("---------------------------------------------------------------------------------------")
}
console.log("");
voteEligibility(35, `Bill`);
voteEligibility(13, 'John');
voteEligibility(8, 'Linda');
voteEligibility(21, 'Jeff');
voteEligibility(-1, `Tim`);
voteEligibility(200, 'Joe');
voteEligibility(undefined,`Sophia`);
voteEligibility(null, `David`);
    
