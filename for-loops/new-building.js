function solve(floor, rooms){
    // let floorName = '';
    
    
    // for ( let i = floor; i > 0; i--){
        
    //     for (let j = 0; j < rooms; j++){
            
    //         if ( i === floor){
    //             floorName = 'L';
    //             process.stdout.write(`${floorName}${i}${j} `);
    //         }else{
    //             if ( i % 2 == 0 && i != floor){
    //                 floorName = 'O';
    //                 process.stdout.write(`${floorName}${i}${j} `)
    //             }else{
    //                 floorName = 'A';
    //                 process.stdout.write(`${floorName}${i}${j} `)
    //             }
    //         }
    //         console.log();
    //     }
        
        
    // }

    let floorName = '';

    for (let i = floor; i > 0; i--) {
        let row = ''; 

        for (let j = 0; j < rooms; j++) {
            if (i === floor) {
                floorName = 'L';
            } else if (i % 2 == 0) {
                floorName = 'O';
            } else {
                floorName = 'A';
            }
            row += `${floorName}${i}${j} `; 
        }
        
        console.log(row.trim()); 
    }
   
    
}
solve(6, 4);