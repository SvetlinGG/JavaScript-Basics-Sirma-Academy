function solve(arr){

    let newArr = [];
    let num = 1;
    for ( let i =0; i < arr.length; i ++){

        if ( arr[i] === 'add'){
            newArr.push(num);
        }else if ( i === 'remove' && arr.length > 0){
            newArr.pop(num);
        }
        num++;
    }
    
    console.log(newArr.join(' '));
    if (newArr.length === 0){
        console.log('Empty');
        
    }
    

}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove'])