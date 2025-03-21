function solve(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice){

    let trashedHeadset = 0;
    let trashedMouse = 0;
    let trashedKeyboard = 0;
    let trashedDisplay = 0;
    let totalTrashed = 0;

    for ( let i=1; i <= lostGames; i++){
        let currentGame = i;
        if ( currentGame % 2 == 0){
            trashedHeadset += 1;
        }
        if (currentGame % 3 == 0){
            trashedMouse += 1;
        }
        if ( currentGame % 2 == 0 && currentGame % 3 == 0){
            trashedKeyboard += 1;
            if ( trashedKeyboard % 2 == 0){
                trashedDisplay += 1;
        } 
        }
            
    }
    totalTrashed = trashedHeadset*headsetPrice + trashedMouse*mousePrice + trashedKeyboard*keyboardPrice + trashedDisplay*displayPrice;
    console.log(`Rage expenses: ${totalTrashed.toFixed(2)} lv."`);
    
    
}
solve(7, 2, 3, 4, 5);
solve(23, 12.5, 21.5, 40, 200);