function solve(num){

    let sumNum = 0
    let newNum = num.toString();
    let char = newNum.length;

    for ( let i=0; i < newNum.length; i++){

        sumNum += Math.pow(Number(newNum[i]), char);
    } 
    console.log(sumNum == num);   
}
solve(153);
solve(123);
solve(407);