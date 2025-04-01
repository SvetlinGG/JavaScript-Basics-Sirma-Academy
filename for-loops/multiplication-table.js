function solve(num){

    let firstNum = 3
    let sum = 0

    for(let i =1; i <= num; i ++){
        sum = firstNum * i;

        console.log(`${i} * ${firstNum} = ${sum}`);
        

    }


}
solve(10)