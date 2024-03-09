// function getUser(id, callback) {
//     setTimeout(() => {
//       callback({id: id, name: 'John Doe'}); // Simulate async user fetch
//     }, 1000);
//     console.log("get USer")
//   }

//   getUser(1, function(user) {
//     console.log(user.name); // John Doe
//   });

// getData(function(a) {
//     getMoreData(a, function(b) {
//         getEvenMoreData(b, function(c) {
//             getYetMoreData(c, function(d) {
//                 getFinalData(d, function(e) {
//                     console.log('Final data:', e);
//                 }, handleError);
//             }, handleError);
//         }, handleError);
//     }, handleError);
// }, handleError);

// function handleError(error) {
//     console.error('Error:', error);
// }

// function getUser(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: id, name: "John Doe" }); // Simulate async user fetch
//     }, 1000);
//     console.log("get USer")
//   });
// }

// getUser(1).then((user) => console.log(user.name));

// async function getUserAsync(id) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject({ id: id, name: "John Doe" }); // Simulate async user fetch
//     }, 1000);
//     console.log("get USer")
//   });
// }

// async function displayUser(id) {
//   try {
//     const user = await getUserAsync(id);
//     console.log(user.name); 
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// displayUser(1);
