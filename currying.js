// Currying/  exec / test / HOF / Passed by value/reference   /Deep copy  /shallow copy  // ARROW FUNCTION  


// function add(a) {
//     return function(b) {
//     return a + b;
//     }
//    }
   
//    const addThree = add(3)(4);
//    console.log(addThree); // Output: 7
   

// const regex = /hello/gi; // Regular expression with global and case-insensitive flags
// const text = "Hello world. hello universe. Hello everyone.";
// const match =regex.exec(text)
// console.log(match)
// // while ((match = regex.exec(text)) !== null) {
// //  console.log(`Found '${match[0]}' at index ${match.index}`);
// // }

// const regex = /world/;
// console.log(regex.test('hello wrld')); // Output: true



// function higherOrder(fn) {
//     fn();
//    }
   
//    higherOrder(function() { console.log("Hello world"); });
// higherOrder(()=>console.log("Hello world"))


// const arrowFunction=()=>{
//     console.log("hello world")
// }

// higherOrder(arrowFunction)

// Passed by value
// let a = 432;
// let b = a;
// b++;
// console.log(a); // Output: 432
// console.log(b); // Output: 433

// Passed by refrence 
// let obj = { name: "Raj", surname: "Sharma" };
// let obj2 = obj;
// obj2.name = "Anil";
// console.log(obj.name); // Output: Anil
// console.log(obj2.name); // Output: Anil

// const original = { a: 1, b: { c: 2, d: { e: 3 } } };
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.b.c = 4;
// deepCopy.b.d.e = 5; 

// console.log(original); // { a: 1, b: { c: 2, d: { e: 3 } } }
// console.log(deepCopy); // { a: 1, b: { c: 4, d: { e: 5 } } }



// const original = { a: 1, b: { c: 2 } };
// const shallow = Object.assign({}, original);

// shallow.a = 3; // Does not affect original.a
// shallow.b.c = 4; // Affects original.b.c

// console.log(original); // { a: 1, b: { c: 4 } }
// console.log(shallow); // { a: 3, b: { c: 4 } }


// Abstract Equality (==)

// console.log('1' == 1); // true, because '1' coerces to 1
// console.log(0 == false); // true, because 0 coerces to false
// console.log('0' == false); // true, because both '0' and false coerce to 0
// console.log('' == 0); // true, because '' (empty string) coerces to 0
// console.log('' == false); // true, because both '' and false coerce to 0



// Strict Equality (===)
// console.log('1' === 1); // false, because the type is different ('string' vs. 'number')
// console.log(0 === false); // false, because the type is different ('number' vs. 'boolean')
// console.log('0' === false); // false, because the type is different ('string' vs. 'boolean')
// console.log('' === 0); // false, because the type is different ('string' vs. 'number')
// console.log('' === false); // false, because the type is different ('string' vs. 'boolean')


