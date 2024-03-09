// 1.EVent Loop

// // function first() {
// //     console.log('First');
// //   }
 
// //   function second() {
// //       console.log('Second');
// //       first();
// //   }
 
// //   second();
// //   // Output: First
// //   //         Second


// console.log('Start');

// setTimeout(() => {
//   console.log('Timer callback');
// }, 0);

// console.log('End');

// // Simulate a long-running operation
// for(let i = 0; i < 1000; i++) {
//     // This loop keeps the call stack busy
//     console.log(i)
// }



// document.getElementById('parent').addEventListener('click', function(event) {
//     console.log('Clicked element:', event.target.id); // Logs the id of the clicked element
//     // Event delegation: Check if the clicked element is one we're interested in
//     // if (event.target && event.target.matches('button.child')) {
//     //     console.log('Button clicked:', event.target.id);
//     // }
// });


