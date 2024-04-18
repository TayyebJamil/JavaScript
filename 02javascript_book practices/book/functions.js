// function sayHello() {
//     let you = prompt("Who you are ? ");
//     console.log("Hello" + " " + you);
// }
// sayHello();

//parameters and arguments

function tester(parm1, parm2) {
    console.log(parm1 + " " + parm2);
}

const arg1 = "1 Argument value";
const arg2 = "2 Argument value";

tester(arg1, arg2) // passing value is argument

// rest parameters
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");


// Imediately invoke function
    // (function () { 
    //     console.log("IIFE!");
    // })();


// recurssive function
// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

