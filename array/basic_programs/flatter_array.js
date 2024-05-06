function flatterArray(arr){
    let result = [];
    for(let index of arr){
        if(Array.isArray(index)){
           result =  result.concat(flatterArray(index));
        }else{
            result.push(index);
        }
    }
    return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log("result = ",flatterArray(nestedArray));