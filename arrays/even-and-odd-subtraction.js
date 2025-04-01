function solve(arr){
    let sumEvenNum = 0;
    let sumOddNum = 0;
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] % 2 == 0){
            sumEvenNum += arr[i];
        }else {
            sumOddNum += arr[i];
        }
    }
    let difference = sumEvenNum - sumOddNum;
    console.log(difference);
    

}
solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);