// Prototypal Inheritance vs. Classical Inheritance
// Classical Inheritance

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Employee extends Person {
//   constructor(name, jobTitle) {
//     super(name); // Call the parent class constructor
//     this.jobTitle = jobTitle;
//   }

//   describeJob() {
//     console.log(`${this.name} works as a ${this.jobTitle}`);
//   }
// }

// const employee = new Employee("Jane", "Developer");
// employee.greet(); // Output: Hello, my name is Jane
// employee.describeJob(); // Output: Jane works as a Developer

// Prototypal Inheritance

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// function Employee(name, jobTitle) {
//   Person.call(this, name); // Inherits properties from Person
//   this.jobTitle = jobTitle;
// }

// // Inherit Person's methods
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// // Additional method for Employee
// Employee.prototype.describeJob = function () {
//   console.log(`${this.name} works as a ${this.jobTitle}`);
// };

// const employee = new Employee("Jane", "Developer");
// employee.greet(); // Hello, my name is Jane
// employee.describeJob(); // Jane works as a Developer


// function createGreeting(greeting) {
//     return function(name) {
//       console.log(`${greeting}, ${name}!`);
//     };
//   }
  
//   const sayHello = createGreeting('gyani');
//   sayHello('HUlk'); 