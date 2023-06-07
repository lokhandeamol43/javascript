class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("");

// // 1. Find all the employees from Wipro company

// console.log("====================== Wipro Company Employee ======================");
// const wiproEmployees = array_employees.filter(
//   (employee) => employee.emp_company === "Wipro"
// );
// console.log("Employees from Wipro:", wiproEmployees.map(emp => emp.emp_name));
// console.log("");

// // 2. Find all the employees from IT or HR department

// console.log("====================== IT/HR Department Employee ======================");
// const itHrEmployees = array_employees.filter(
//   (employee) => employee.emp_dept === "IT" || employee.emp_dept === "HR"
// );
// console.log("Employees from IT or HR department:", itHrEmployees.map(emp => emp.emp_name));
// console.log("");

// // 3. Find all the employees whose emp id's are greater than 50

// console.log("====================== Employee ID is greater than 50 ======================");
// const employeesWithIdGreaterThan50 = array_employees.filter(
//   (employee) => employee.emp_id > 50
// );
// console.log("Employees with ID greater than 50:", employeesWithIdGreaterThan50.map(emp => emp.emp_name));
// console.log("");

// // 4. Find all the employees whose names start with letter 'A', 'V', or 'M'

// console.log("====================== Employee name starts with 'A', 'V', or 'M' ======================");
// const employeesWithSpecificInitials = array_employees.filter(
//   (employee) =>
//     employee.emp_name.startsWith("A") ||
//     employee.emp_name.startsWith("V") ||
//     employee.emp_name.startsWith("M")
// );
// console.log("Employees with specific initials:", employeesWithSpecificInitials.map(emp => emp.emp_name));
// console.log("");

// // 5. Find the average salary of all employees for each department

// console.log("====================== Average Salary of all employee ======================");
// const departmentSalaries = array_employees.reduce((acc, employee) => {
//   if (!acc[employee.emp_dept]) {
//     acc[employee.emp_dept] = {
//       totalSalary: 0,
//       employeeCount: 0
//     };
//   }
//   acc[employee.emp_dept].totalSalary += employee.emp_salary;
//   acc[employee.emp_dept].employeeCount++;
//   return acc;
// }, {});

// for (const department in departmentSalaries) {
//   const { totalSalary, employeeCount } = departmentSalaries[department];
//   const averageSalary = totalSalary / employeeCount;
//   console.log(`Average salary for ${department}:`, averageSalary);
// }
// console.log("");

// // // 6. Find the average salary for the 'IT' department
// console.log("====================== Average Salary of IT Department ======================");
// const itEmployees = array_employees.filter(
//   (employee) => employee.emp_dept === "IT"
// );
// const itTotalSalary = itEmployees.reduce(
//   (sum, employee) => sum + employee.emp_salary,
//   0
// );
// const itAverageSalary = itTotalSalary / itEmployees.length;
// console.log("Average salary for IT department:", itAverageSalary);


array_employees.length

const wipro_wale=array_employees.filter((employee) => {
    return employee.emp_company == "Wipro";
});
const wipro_emp=wipro_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`1. Employees working in Wipro: `);
console.log(wipro_emp);
console.log("------------------------------------------------------------------------------------");
console.log(``);

const IT_HR_wale=array_employees.filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept== "HR";
});
const IT_HR_emp=IT_HR_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`2. Employees working in "IT"  OR "HR" Dept: `);
console.log(IT_HR_emp);
console.log("------------------------------------------------------------------------------------");
console.log(``);


const ID_50_wale=array_employees.filter((employee) => {
    return employee.emp_id >50; 
});
const ID_50=ID_50_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`3. Employees having ID greater than 50: `);
console.log(ID_50);
console.log("------------------------------------------------------------------------------------");
console.log(``);

const AVM_initials_wale=array_employees.filter((employee) => {
    if (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")){
        return employee.emp_name;
    }
});

const AVM_initials =AVM_initials_wale.map((employee) =>{
    return employee.emp_name;
});
console.log(`4. Employees having AVM_initials: `);
console.log(AVM_initials);
console.log("------------------------------------------------------------------------------------");
console.log(``);

console.log("5. Find out the Avegare of salary of all employees: ");
const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sumSalary =empSalaries.reduce( (Total, value) => {
    return Total+value;
});
console.log(`   Total sum of salaries: ${sumSalary}`);
const No_of_emp=(array_employees.length);
console.log(`   No of employees : ${No_of_emp}`);
const avg=(sumSalary/No_of_emp);
const avg2=Math.round(avg);

console.log(`   Average of salary of all employees is: ${avg2}`);
console.log("------------------------------------------------------------------------------------");
console.log(``);
console.log("6. Find out the Avegare of salary of IT employees: ");

const IT_Salary_Wale= array_employees.filter( (employee) => {
    return employee.emp_dept === "IT";

})

const IT_Salaries = IT_Salary_Wale.map( (employee) => {
    return employee.emp_salary;
});

const Salary =IT_Salaries.reduce( (Total, value) => {
    return Total+value;
});
console.log(`   Total sum of IT salaries: ${Salary}`);
const No_of_IT_emp=(IT_Salary_Wale.length);
console.log(`   No of IT employees : ${No_of_IT_emp}`);
const IT_avg=(Salary/No_of_IT_emp);
const IT_avg2=Math.round(IT_avg);

console.log(`   Average of salary of IT employees is: ${IT_avg2}`);

