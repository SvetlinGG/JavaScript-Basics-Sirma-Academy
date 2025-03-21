function solve(n){

    let sum = 1;

    for ( let i=0; i <=n; i++){
        console.log(2 * i + 1);
        
        sum += 2 * i;
    }
    console.log(sum);
    

}
solve(3);