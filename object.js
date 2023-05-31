let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true 
 };
 console.log(`Type of person is ${typeof person}`);
 
 console.log(`------- Accessing object properties----------`);
 // Dot Notation .
 const personName = person.name;
 const personHeight = person["height"];
 console.log(`Person name is : ${personName}`);
 console.log(`Person City is : ${person.city}`);
 
 console.log(`Person Height is : ${person['height']}`);
 
 console.log(`------- Updating object properties----------`);
 person.city = "Mumbai";
 person.isMarried = false;
 console.log(`Person City is : ${person.city}`);
 console.log(`Person married status is : ${person.isMarried}`);
 
 console.log(`------- Adding object properties----------`);
 person.gender = "Male";
 person.state = "MH";
 
 console.log(`------- Deleting object properties----------`);
 delete person.height;
 
 console.log(person);
  console.table(person);

  console.log(`============ Creating an empty object==================`);
 let student = {

 }
 console.log(student);
 student.marks="99%";
 console.log(student);

 const isCityAvailable = "city" in student;
 console.log(`Is City available in student object: ${isCityAvailable}`);
 console.log(`Is marks available in student object: ${"marks" in student}`);



 //30 may


//  const person = {
//     height: "6feet",
//     name: "Bill gates",
//     city: "Pune",
//     age: 54,
//     isMarried: true
// }

// Object.freeze(person); // Freeze an object

// person.age = 67; // Update not allowed as person object is freezed
// delete person.city; // // Delete not allowed as person object is freezed
// person.pin = 4445566; // Add not allowed as person object is freezed

// console.table(person);

// const person = {
//     height: "6feet",
//     name: "Bill gates",
//     city: "Pune",
//     age: 54,
//     isMarried: true
// }
// const address = {
//     street: "Wakad Road",
//     landmark: "Near Datta Mandir",
//     city: "Mumbai",
//     pin: 431220, 
//     state: "MH",
//     country: "India"
//   } 

// const marks = {
//     english: 95,
//     programming: 100,
//     math: 89
// }


// // Object.assign(targetObject, source1, source2, source3);

// Object.assign(person, address); // Copy object - address into the person object

// const mergedObject = Object.assign({ }, address, marks); // Copy address and marks into the new object - mergedObject

// console.table(person);
  
// console.table(mergedObject);


// //object clone


// let person = {
//     height: "6feet",
//     name: "Bill gates",
//     city: "Pune",
//     age: 54,
//     isMarried: true
// }

// let student = {

// }
// // student = person; // Shallow clone

// Object.assign(student, person);

// student.age = 100;
// person.age = 90;

// console.table(person);
// console.table(student);