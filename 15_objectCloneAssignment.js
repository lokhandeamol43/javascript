const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const arrayEven = [2, 30, 14, 8];

// 1. Perform shallow clone on arrayNums, Update cloned array with values 55, 66 using push() and log original and cloned array on console
console.log("Step 1:");

console.log("Original Array:", arrayNums);

const clonedArray1 = arrayNums;
console.log("Cloned Array:", clonedArray1);

clonedArray1.push(55, 66);
console.log("Cloned Array after push operation:", clonedArray1);
console.log("");

// 2. Perform deep clone using spread operator, Update original array ie arrayNums with values 10,25 at last position and log original and cloned array on console
console.log("Step 2:");
const clonedArray2 = [...arrayNums];
arrayNums.push(10, 25);
console.log("Original array after push operation:", arrayNums);
console.log("Cloned array after deep clone:", clonedArray2);
console.log("");

// 3. Merge or concat arrayEven with arrayNums using spread operator, log result on console after merge array operation
console.log("Step 3:");
const concatArray = [...arrayNums, ...arrayEven];
console.log("Concated array:", concatArray);

//4

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
      July_month: "40,000 INR",
      aug_month: "50,000 INR",
      jun_month: "65,000 INR"
    },
    address: {
      locality: {
        colony: "Om Vrindavan Society",
        street: "Kanch Pokli, 431202"
      },
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"]
  };
  console.log("");

  // 4. Log the employee details on console
  console.log("Step 4:");
  console.log("Employee Address:", employee_info.address.locality.colony + ", " + employee_info.address.locality.street + ", " + employee_info.address.city + ", " + employee_info.address.state + ", " + employee_info.address.country);
  console.log("Mobile numbers:", employee_info.mobiles);
  console.log("");

  // 5. Perform deep copy using JSON.stringify()
  const clonedObject = JSON.parse(JSON.stringify(employee_info));
  clonedObject.salary.July_month = "80K";
  clonedObject.address.country = "United Kingdom";
  
  console.log("Step 5:");
  console.log(`Original Salary of July Month : ${employee_info.salary.July_month}`);
  console.log("Updated Salary for July_month:", clonedObject.salary.July_month);
  console.log(`Original Country : ${employee_info.address.country}`);
  console.log("Updated Country:", clonedObject.address.country);

  