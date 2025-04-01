function solve(start, end, magicNumber){
    let combinations = 0;
    let firstDigit = 0;
    let secondDigit = 0;
    let sum = 0;
    let condition = false;

    for ( let i = start; i <= end; i ++){
        firstDigit = i;

        for ( let j = start; j <= end; j++){
            secondDigit = j;
            combinations += 1

            sum = firstDigit + secondDigit

            if ( sum == magicNumber){
                console.log(`Combination ${combinations} - (${firstDigit} + ${secondDigit} = ${magicNumber})`);
                condition = true;
                break;
            }
                
            
        if ( condition){
            break
        }else {
            console.log(`${combinations} combinations - neither equals ${magicNumber}`);
        }
        }
    }
}
solve(1, 10, 5)
//solve(23, 24, 20)