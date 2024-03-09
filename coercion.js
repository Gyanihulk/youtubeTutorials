
// Explicit Coercion 
// let explicitStringToNumber = Number("123"); // String to number
// console.log(explicitStringToNumber); // Output: 123 (number)

// let explicitNumberToString = String(123); // Number to string
// console.log(explicitNumberToString); // Output: "123" (string)

// let explicitTruthyToBoolean = Boolean(1); // Truthy to boolean
// console.log(explicitTruthyToBoolean); // Output: true (boolean)

// let explicitFalsyToBoolean = Boolean(0); // Falsy to boolean
// console.log(explicitFalsyToBoolean); // Output: false (boolean)


// Implicit Coercion

let implicitNumberToString = 5 + "5"; // Number to string
console.log(implicitNumberToString); // Output: "5" (string)

let implicitBooleanToNumber = "5" - 2; // String to number
console.log(implicitBooleanToNumber); // Output: 3 (number)

let implicitNumberToBoolean = !!!"5"; // Number to boolean
console.log(implicitNumberToBoolean); // Output: true (boolean)
