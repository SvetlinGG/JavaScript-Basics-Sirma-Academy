function solve(start, end, magicNumber){
    let combinations = 0;
    let firstDigit = 0;
    let secondDigit = 0;

    for ( let i = start; i <= end; i ++){
        firstDigit = i;

        for ( let j = start; j <= end; j++){
            secondDigit = j;

            if ( firstDigit + secondDigit === magicNumber){
                combinations += 1
                console.log(`Combination ${combinations} - (${firstDigit} + ${secondDigit} = ${magicNumber})`);
                
            }else {
                console.log(`${combinations} combinations - neither equals ${magicNumber}`);
                
            }
        }
        
    }
    
}
solve(1, 10, 5)
solve(23, 24, 20)