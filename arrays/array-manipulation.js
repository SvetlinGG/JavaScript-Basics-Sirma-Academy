function solve(arr){

    let newArr = [];
    newArr.push(arr[0]);
    
    for ( let i = 1; i < arr.length; i++){
        if ( arr[i] === 'Add 3'){
            newArr.push(3);
        }else if ( arr[i] === 'Remove 2'){
            newArr.slice(1, 3);
        }else if ( arr[i] === 'RemoveAt 1'){
            newArr.splice(arr[i], 0);
        }else if (arr[i] === 'insert 8 3'){
            newArr.splice(arr[i], 0, 8)
        }
        
    }
    console.log(newArr);
    
    
    
    
    
    
    


}
solve(["4, 19, 2, 53, 6, 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]
    );
