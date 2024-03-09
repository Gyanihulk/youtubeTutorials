// SCOPES HOISTING VAR LET CONST

// HOISTING
// console.log(varDeclaredLater); // Output: undefined
// var varDeclaredLater = "I am defined later";

// functionDeclaredEarlier();

// function functionDeclaredEarlier() {

//  console.log("I am declared earlier");
// }

// // Attempting to use `let` or `const` before declaration
// console.log(letDeclaredLater); // ReferenceError: Cannot access 'letDeclaredLater' before initialization
// let letDeclaredLater = "Defined later with let";

// var globalVar = "I am global";

// function exampleFunction() {
//   var functionVar = "I am local to exampleFunction";

//   if (true) {
//     var stillFunctionScoped = "Accessible within exampleFunction";
//     let blockScopedVar = "I am limited to this block";
//     console.log(blockScopedVar); // Works
//   }
//   console.log(globalVar)
//   console.log(stillFunctionScoped); // Works
// // Error: blockScopedVar is not defined
// }

// console.log(globalVar); // Works
// exampleFunction()
// console.log(functionVar); // Error: functionVar is not defined


// LET VAR CONST 


let variable2 = 89;

function catchValues() {
   
    if(true){
        var variable1 = 31;
        console.log("inside if condition ")
    }

 console.log(variable1); // Accessible, outputs 31
 console.log(variable2); // Accessible, outputs 89
}
console.log(variable2); // Outputs undefined, as `let` does not create a property on the global object
catchValues()