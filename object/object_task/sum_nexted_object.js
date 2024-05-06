function nextObjectSum(arr){

    let result = 0;

    for(let keys in arr){
        if(Array.isArray(arr[keys])){
            result = result +  nextObjectSum(arr[keys]);
        }else if(typeof arr[keys] === "object"){
            result = result + nextObjectSum(arr[keys]);
        }else{
            result= result + arr[keys];
        }
    }

    return result;
}


const arr = [
    { value: 5 },
    { value: 10 },
    { nested: [{ value: 3 }, { value: 7 }] }
];
console.log('addition - ',nextObjectSum(arr));