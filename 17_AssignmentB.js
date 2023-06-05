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
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
  
  // 1. Find all the employees working in "TCS" and log only employee names and company name on console
  console.log("======================================================= Employees working in TCS: =======================================================");
  console.log("");
  array_employees.forEach((emp) => {
    if (emp.emp_company === "TCS") {
      console.log(`Name: ${emp.emp_name}, Company: ${emp.emp_company}`);
    }
  });
  console.log("");
  // 2. Find the 'Finance' department employees, log only department and employee name on console
  console.log("======================================================= Finance department employees: =======================================================");
  console.log("");
  array_employees.forEach((emp) => {
    if (emp.emp_dept === "Finance") {
      console.log(`Department: ${emp.emp_dept}, Name: ${emp.emp_name}`);
    }
  });
  console.log("");
  // 3. Find the employees whose name starts with 'R' and log complete employee details on console
  console.log("============================================= Employees whose name starts with 'R': ===========================================================================");
  console.log("");
  array_employees.forEach((emp) => {
    if (emp.emp_name.startsWith("R")) {
      console.log(emp);
    }
  });
  console.log("");
  // 4. Find the employees whose salary is greater than 75000, and log emp name, company, and salary on console
  console.log("============================================= Employees with salary greater than 75000: ===========================================================================");
  console.log("");
  array_employees.forEach((emp) => {
    if (emp.emp_salary > 75000) {
      console.log(`Name: ${emp.emp_name}, Company: ${emp.emp_company}, Salary: ${emp.emp_salary}`);
    }
  });
  console.log("");
  // 5. Find the employees with salary greater than or equal to 50000 and from the 'IT' department, log complete employee details on console
  console.log("=================================== Employees with salary greater than or equal to 50000 and from the IT department: ==================================================");
  console.log("");
  array_employees.forEach((emp) => {
    if (emp.emp_salary >= 50000 && emp.emp_dept === "IT") {
      console.log(emp);
    }
  });
  console.log("");
  // 6. Find all the employees from the company "Infy" and log complete employee details on console
  console.log("======================================================= Employees from the company 'Infy': =======================================================");
  console.log("");
  array_employees.forEach((emp) => {
    if (emp.emp_company === "Infy") {
      console.log(emp);
    }
  });
  