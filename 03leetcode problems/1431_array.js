// 1431. Kids With the Greatest Number of Candies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.



let inputString = prompt("Enter an integer array of candies :"); // Prompt the user to enter comma-separated numbers
let candies = [];
if (inputString) {
    let words = inputString.split(",").filter(word => isNaN(Number(word)));
    if (words.length > 0) {
        console.log("Error: Input should only contain numbers");
    }
    else {
        candies = inputString.split(",").map(Number).filter(candies => candies >= 0 && Number.isInteger(candies));
        console.log(`Array of candies ${candies}`);
    }
}
else {
    console.log("No input provided");
}
// // // input target
let extraCandies = prompt("Enter number of Extra Candies:");
var target;
if (extraCandies) {
    target = parseInt(extraCandies);
    if (!isNaN(target) && target >= 0 && Number.isInteger(target)) {
        console.log("Extra Candies are:", target);
    }
    else {
        console.log("Invalid input. Please enter a non-negative integer target.");
    }
}
else {
    console.log("No input provided");
}
var max=0;
for(let i=0; i<=candies.length; i++){
    if(candies[i]>=max){
        max=candies[i];
    }
}
console.log(max)
 

let out=[];
for (let i = 0; i < candies.length; i++) {
        if((candies[i]+target)>=max){
            out.push(true);
        }else  {
            out.push(false);
        }
}
console.log(out);
debugger;