function occuranceCount(arr){

    let result = 0;
    for(let keys in arr){
        if(Array.isArray(arr[keys])){
           result =  result +  occuranceCount(arr[keys]);
        }else if(typeof arr[keys] ==="object"){
           result =  result + occuranceCount(arr[keys]);
        }else{
            if(arr[keys] === 5){
                result++;
            }
        }
    }
    return result;

}

const arr = [
    { value: 5 },
    { nested: [{ value: 3 }, { value: 5 }] },
    { value: 5 }
];
const target = 5;  

console.log("target - ",occuranceCount(arr,target));