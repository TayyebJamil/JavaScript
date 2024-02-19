let array = (start, end) => {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

console.log(array(1, 5));

let sum=0;
 let sumArray=() =>{
    let arr=array(1, 5);
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];

    }
return sum;
 }
 console.log(sumArray());