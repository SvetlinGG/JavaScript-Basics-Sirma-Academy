function solve(start, end, magicNumber){
    let combinations = 0;

    for ( let i = start; i < end; i ++){
        for ( let j = end; j > start; j--){
            console.log(i);
            console.log(j);
        }
    }
}
solve(1, 10, 5)