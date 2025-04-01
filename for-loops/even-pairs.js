function solve(num1, num2, num3, num4){

    let digit1 = num1 + num3;
    let digit2 = num2 + num4;
    let result = 0
    
    for ( let first = num1; first <= digit1; first++){
        let isPrime = true;

        for ( let i = 2; i < first; i++){
            if ( first % i === 0){
                isPrime = false;
                break;
            }
        }
        if ( isPrime){
            result = first;
              
        }
        for ( let second = num2; second <= digit2; second++){
            let isPrime2 = true;
    
            for ( let i = 2; i < second; i++){
                if ( second % i === 0){
                    isPrime2 = false;
                    break;
                }
            }
            if ( isPrime2 && isPrime){
                console.log(`${result}${second}`);
                
            }
        }
    }

    


    
    

}
//solve(10, 20, 5, 5);
solve(10, 30, 9, 6);

