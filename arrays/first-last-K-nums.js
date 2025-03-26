function solve(num, arr){

    let firstNum = arr.slice(0, num);
    let lastNum = arr.slice(-num)
    console.log(firstNum.join(' '));
    console.log(lastNum.join(' '));
    
    


}
solve(2, [7, 8, 9]);
solve(3, [6, 7, 8, 9])