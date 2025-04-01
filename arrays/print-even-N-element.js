function solve(arr, num){

    let newArr = [];

    for ( let i = 0; i < arr.length; i+=num){

        newArr.push(arr[i])
        
    }
    console.log(newArr.join(' '));
    


}
solve(['5', '15', '31', '14', '20'], 2);
solve(['dsa', 'asd', 'demo', 'test'], 2);
solve(['1', '2', '3', '4', '5'], 6)