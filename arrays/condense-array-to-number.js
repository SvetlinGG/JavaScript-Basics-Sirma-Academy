function solve(arr) {
    let newArr = [];
    while (arr.length > 1) {
        
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i] + arr[i + 1]);
        }
        arr = newArr;
        console.log(newArr);
    }
        
        
    
}

solve([2, 10, 3]);
solve([5, 1, 2]);