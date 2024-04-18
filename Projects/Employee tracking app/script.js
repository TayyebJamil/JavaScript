// Page 188

// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the
// constructor.
// 2. Create two or more people with values for their first names, last names, and
// the number of years they've worked at the company. Add the people into an
// array.
// 3. Set up a prototype to return the details of the person's first and last names
// and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding
// some text to make the output a full sentence.

class Employee {
    constructor(firstname, lastname, years) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.years = years;
    };
}

let emp1 = new Employee("Ali", "Azhar", 3);
let emp2 = new Employee("Uzair", "Usama", 5);

let emps = [emp1, emp2];

Employee.prototype.detail = function () {
    return `Name: ${this.firstname} ${this.lastname}, Years Worked: ${this.years}`;
}

emps.forEach(employee => {
    console.log(employee.detail());
});

// Run code with cmd "node script.js"
