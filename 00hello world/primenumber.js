var num = parseInt(prompt("Enter a number to check prime or not :"))

for(var i=2; i<num; i++){
    var out = num%i;
    if(out==0){
        console.log("Not a prime number",num);
        break;
    }
    else{
        console.log("prime number",num)
    }
}