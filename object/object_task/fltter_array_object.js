function flatter(arr){
    let result = [];
    for(let keys in arr){
        if(Array.isArray(arr[keys])){
           result = result.concat(flatter(arr[keys]));
        }else if(typeof arr[keys] ==="object"){
            result =  result.concat(flatter(arr[keys]));
        }else{
            result.push(arr[keys]);
        }
    }
    return result;
}

const arr = [
    { value: 1 },
    { nested: [{ value: 2 }, { nested: [{ value: 3 }] }] },
    { value: 4 }
  ];

  console.log("flatter = ",flatter(arr));