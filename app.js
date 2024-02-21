/** readline module provides an interface for reading data from
 * readable stream 
 */
const readline = require("readline");
const rl = readline.createInterface({   // create new instance by passing object
    input: process.stdin,               // Standard Input
    output: process.stdout              // Standard Output
});

// question() displays a prompt with queation and wait for user to give answer
rl.question("Please enter your name: ", (name) => {
    console.log("You enterd: " + name);
    rl.close();                         // close interface
})

// event listener for the close event
rl.on("close", () => {
    console.log("Interface Closed...!!!");
    process.exit(0);                     // exit nodejs process
})