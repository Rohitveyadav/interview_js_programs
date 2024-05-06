function searchKeys(arr){
    let status = false;

    for(let keys in arr){
        if(status) return status;
        if(Array.isArray(arr[keys])){
          status =   searchKeys(arr[keys]);
        }else if(typeof arr[keys] ==="object"){
            status = searchKeys(arr[keys]);
        }else{
            if(keys === key && arr[keys] ===value){
                return true;
            }
        }
    }

    return status;
}

const arr = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { nested: [{ name: 'Charlie', age: 40 }] }
  ];
  const key = 'name';
  const value = 'Bob';

  console.log("status = ",searchKeys(arr));