function mergingObject(obj_one,obj_two){
    let result = [];

    for(let element of obj_two ){
        let status = false;
        for(let el of obj_one){
            if(element.id === el.id){
                result.push(el);
                status = true;
                break
            }

          
            // else{
            //     result.push(el)
            // }
        }
        if(!status){
            result.push(element);
        }
    }
    
    return result;
}

// const arr1 = [{ id: 1, value: 'A' }];
// const arr2 = [{ id: 2, value: 'B' }, { id: 1, value: 'C' }];

const arr1 = [
    { id: 1, value: 'A', nested: { prop1: 'nested1', prop2: 'nested2' } },
    { id: 2, value: 'D', nested: { prop1: 'nested3', prop2: 'nested4' } },
    { id: 3, value: 'G', nested: { prop1: 'nested5', prop2: 'nested6' } }
];

const arr2 = [
    { id: 2, value: 'B', nested: { prop1: 'nested7', prop2: 'nested8' } },
    { id: 1, value: 'C', nested: { prop1: 'nested9', prop2: 'nested10' } },
    { id: 4, value: 'F', nested: { prop1: 'nested11', prop2: 'nested12' } }
];


console.log(mergingObject(arr1,arr2));