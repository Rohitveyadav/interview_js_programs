function arraySearch(arr){
    let result = [];
    // for(let keys in arr){
    //   if(Array.isArray(arr[keys])){
    //     result = result.concat(arraySearch(arr[keys]));
    //   }else if(typeof arr[keys] ==="object"){
    //     result =  result.concat(arraySearch(arr[keys]));
    //   }else{
    //     if(arr['age'] > 25){
    //         result.push(arr);
    //         return result;
    //     }
    //   }
    // }

    for(let keys of arr){
      if(Array.isArray(keys)){
        result =  result.concat(arraySearch(keys));
      }else if(typeof keys ==="object"){
        result = result.concat(arraySearch(Object.values(keys)));
      }
    }
    return result;
}
const arr = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { nested: [{ name: 'Charlie', age: 40 }] }
  ];

  console.log("result =",arraySearch(arr));