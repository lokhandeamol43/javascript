class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infosys");
  
  // 1. Find out the "TCS" employee details and log only name & company on console
  console.log("===== TCS Employee Details =====");
  console.log("");
  const tcsEmployees = [emp_anil, emp_rishi, emp_vinayak];
  tcsEmployees.forEach((employee) => {
    console.log("Name:", employee.emp_name, ", Company:", employee.emp_company);
  });
  console.log("");

  // 2. Find the employees with salary greater than or equal 50000 (Log the all employee details on console)
  console.log("===== Employee Salary greater than or equal to =====");
  console.log("");
  const employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
  employees.forEach((employee) => {
    if (employee.emp_salary >= 50000) {
      console.log(employee);
    }
  });

  console.log("");
  
  // 3. Find the sum of all employees' salary and log on console
  console.log("===== Sum of All Employee Salary =====");
  console.log("");
  const totalSalary = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh]
    .reduce((sum, employee) => sum + employee.emp_salary, 0);
  console.log("Total Salary:", totalSalary);
  console.log("");
  
  // 4. Find the average salary and log on console (Average = Total Salary / Number of employees)
  console.log("===== Average Salary of Employees =====");
  console.log("");
  const averageSalary = totalSalary / 7; // Assuming there are 7 employees
  console.log("Average Salary:", averageSalary);
  console.log("");
  
  // 5. Find the 'IT' OR 'HR' department employees whose salary is greater than or equal to 75000 and log complete employee details on console
  console.log("===== IT Or HR department employees salary >= 75000 =====");
  console.log("");
  const employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
  console.log("IT/HR Employees with salary greater than or equal to 75000:");
  employees.forEach((employee) => {
  if ((employee.emp_dept === "IT" || employee.emp_dept === "HR") && employee.emp_salary >= 75000) {
    console.log(employee);
  }
});
  