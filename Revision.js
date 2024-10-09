var name = "Sikandar Ali";
console.log(name);
name = "Khalid Mehmood";
console.log(name);


// Blocking operations example

// A long loop that blocks other operations
// for (let i = 0; i < 1e9; i++) {
//     // Time-consuming task
//   }
//   console.log("This message is blocked until the loop finishes.");

// non - blocking operations code Example 

console.log("Start");

setTimeout(() => {
  console.log("This is non-blocking.");
}, 2000);  // Runs after 2 seconds but does not block the next line.

console.log("End");
