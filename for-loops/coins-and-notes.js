function solve(BGN1, BGN2,BGN5, sum){
    

    for ( let i = 0; i <= BGN1; i++){
        for ( let j = 0; j <= BGN2; j++){
            for ( let k = 0; k <= BGN5; k++){
                if ( i*1 + j*2 + k*5 == sum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                    
                }
            }
        }
    }
    
    


}
solve(3, 2, 3, 10);
solve(5, 3, 1, 7);