function solve(num){

    let fibonacci = 0;
    let b = 1;
    let arr = [];

    for ( let i = 1; i <= num; i ++){

        arr.push(fibonacci, b + i)
        
    }
    
    console.log(arr);
    

}
solve(3)