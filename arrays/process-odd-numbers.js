function solve(arr){

    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if ( i % 2 !== 0){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.reverse().map(num => num * 2).join(' '));
    

}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);