let inputString= prompt("Enter a string ");
console.log("You entered "+inputString)

let countbs= ()=>{
    let count=0;
    for(let i=0; i<inputString.length; i++){
        if(inputString[i]==="b"){
            count++;
        }
    }
    return count;

}

console.log(countbs(inputString));

let char=prompt("Enter character to be counted :");

let countChar= ()=>{
    let cnt=0;
    for(let i=0; i<inputString.length; i++){
        if(inputString[i]===char){
            cnt++;
        }
    }
    return cnt;
}

console.log(countChar(inputString),char);