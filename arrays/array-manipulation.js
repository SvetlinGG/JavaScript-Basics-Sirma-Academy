function solve(arr){

    let newArr = arr[0].split(', ').map(Number);
    for ( let i =1; i < arr.length; i++){
        [operation, first, second] = arr[i].split(' ');
        first = Number(first);
        second = Number(second);


         if ( operation === 'Add'){
            newArr.push(first);
         }else if ( operation === 'Remove'){
            newArr = newArr.filter(num => num !== first);
         }else if ( operation === 'RemoveAt'){
            newArr.splice(first, 1)
         }else if( operation === 'Insert'){
            newArr.splice(second, 0, first)
         }
            
        
    }
    console.log(newArr.join(' '));
    
}
solve(["4, 19, 2, 53, 6, 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]
    );
