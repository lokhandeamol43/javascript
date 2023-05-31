// class for vehicle

class Vehicle{
    constructor(vehicleName, engine, fuelType, bodyType, price){
        this.vehicleName = vehicleName;
        this.engine = engine;
        this.fuelType = fuelType;
        this.bodyType = bodyType;
        this.price = price;
    }
    showDetails(){
        console.log(`Vehicle Name: ${this.vehicleName}, Engine: ${this.engine}, Fuel Type: ${this.fuelType}, Body Type: ${this.bodyType}, Price: ${this.price} `);
        console.log("--------------------------------------------------------------------------------------------------------");
    }
}
const rollsRoyce = new Vehicle("Rolls Royce Ghost", "6750 cc", "Petrol", "Sedan", "6.95 Cr");
const porsche = new Vehicle("Porsche Macan", "2894 cc", "Petrol", "SUV", "1.47 Cr" );
const bugatti = new Vehicle("Begatti Veyron", "7993 cc", "Petrol", "Convertible", "12 Cr");
const mercedes = new Vehicle("Mercedes-Benz GLS", "3982 cc", "Petrol", "SUV", "2.92 Cr");
const bentley = new Vehicle("Bentley Bentayga", "3956 cc", "Petrol", "SUV", "4.10 Cr")

// rollsRoyce.showDetails(); 
// porsche.showDetails();
// bugatti.showDetails();
// mercedes.showDetails();
// bentley.showDetails();
console.log("============================================Vehicle Details============================================");
console.log("");
const array = [rollsRoyce, porsche, bugatti, mercedes, bentley];

for (const element of array) {
    element.showDetails();
}

// ==================class for college====================

class College{
    constructor(CollegeName, city, department, comtactNumber){
        this.CollegeName = CollegeName;
        this.city = city;
        this.department = department;
        this.comtactNumber = comtactNumber;
    }
    printDetails(){
        console.log(`College Name: ${this.CollegeName}`);
        console.log(`City: ${this.city}`);
        console.log(`Department: ${this.department}`);
        console.log(`Contact Number: ${this.comtactNumber}`);
        console.log("--------------------------------------------------------------------------------------------------------");
    }
}
const mit = new College("Massachusetts Institute of Technology", "Cambridge, Massachusetts, United States", "Computer Science and Artificial Intelligence", 16172531000);
const oxford = new College("University of Oxford", "Oxford, United Kingdom", "Computer Science", 441865273838);
const stanford = new College("Stanford University", "Stanford, California, United States", "Electrical Engineering", 16507232300);
const tokyo = new College("University of Tokyo", " Tokyo, Japan", "Mathematical Sciences", 81358416161);

console.log("");
console.log("============================================ College Details ============================================");
console.log("");
const array1 = [mit, oxford, stanford, tokyo];

for (const index of array1) {
    index.printDetails();
}
