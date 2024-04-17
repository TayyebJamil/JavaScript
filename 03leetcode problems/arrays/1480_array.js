// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

let inputString = prompt("Enter an integer array of numbers :"); // Prompt the user to enter comma-separated numbers
let nums = [];
if (inputString) {
    let words = inputString.split(",").filter(word => isNaN(Number(word)));
    if (words.length > 0) {
        console.log("Error: Input should only contain numbers");
    }
    else {
        nums = inputString.split(",").map(Number).filter(nums => nums >= 0 && Number.isInteger(nums));
        console.log(`Array of numbers : ${nums}`);
    }
}
else {
    console.log("No input provided");
}
let lastnum=nums.length-1;
console.log(nums[lastnum])
 
for(let i=0; i<nums.length; i++){
    if(nums[i]==nums[lastnum]){
       nums[i]+=nums[i+1];
    }

     
}

console.log(nums);


debugger;