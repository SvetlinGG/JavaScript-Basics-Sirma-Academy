function solve(floor, rooms){
    let floorName = '';
    
    for ( let i = floor; i >=1; i--){

        for (let j = 0; j <= rooms -1; j++){

            if (i = floor){
                floorName = 'L'
            }
            console.log(`${i}${j}`);
            
        }
    }
    
}
solve(6, 4);