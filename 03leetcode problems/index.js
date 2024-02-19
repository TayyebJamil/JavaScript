//Find wors containing characters
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

const userInput = prompt("Enter a comma-separated list of strings:");
const words = userInput.split(",");
 
 
    

// document.write("Array of words : ",words);

console.log(words[0]);
console.log(words[1]);

var char=[0];

char=prompt("Enter a character");

console.log(char);

const filteredWords = words.filter(word => word.includes(char));

// const index = words.findIndex(word => word === "saad");
for(var i=0; i<filteredWords.length; i++){
    const inde=words.indexOf(filteredWords[i]);
    console.log("Your character '"+char+"' occurs at index "+inde);
}

 
     

// for(var i=0; i<words.length; i++){
//     var inde
    
//     if(words[i]==char){
//         var index = i;
//         console.log("Your char occur at  "+index + " index")
//     }
    
    
// }



