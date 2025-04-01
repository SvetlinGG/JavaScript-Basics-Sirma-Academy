function solve(arr){

    let newArr = [];
    let first = arr[0];
    newArr.push(first);
    for ( let i = 0; i < arr.length; i++){

        if (arr[i] > first){
            first = arr[i];
            newArr.push(arr[i]);
            
        }
    }
    console.log(newArr.join(' '));
    

}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([ 20, 3, 2, 15, 6, 1])