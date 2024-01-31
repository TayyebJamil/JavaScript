var arr=[11,22,33,44,55,66,77,88,99,]
var n;
n=parseInt(prompt("Enter a number to perform search : "));
var out;
var f=0;

console.log("user input"+n)

for(var i=0; i<arr.length; i++){
     
    if(arr[i] === n){
        console.log("Found "+n+" at Index "+i);
        f=1;
        break;
    }
    
}
if(f==0){
    console.log("Not found");
}
