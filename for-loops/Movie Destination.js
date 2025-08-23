function movieDestination(input){
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let dayCount = Number(input[3]);
    let price = 0 ;

    switch ( destination ){
        case 'Dubai':
            if ( season === 'Winter'){
                price = dayCount * 45000;
            }else if ( season === 'Summer'){
                price = dayCount * 40000;
            }
            break;
        case 'Sofia':
            if ( season === 'Winter'){
                price = dayCount * 17000;
            }else if ( season === 'Summer'){
                price = dayCount * 12500;
            }
            break;
        case 'London':
            if ( season === 'Winter'){
                price = dayCount * 24000;
            }else if ( season === 'Summer'){
                price = dayCount * 20250;
            }
            break;
    }
    if ( destination === 'Dubai'){
        price *=0.7;
    }else if ( destination === 'Sofia'){
        price *= 1.25;
    }
    if ( budget >= price){
        let moneyLeft = budget - price;
        console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
    }else {
        let moneyNeeded = price - budget;
        console.log(`The director needs ${moneyNeeded.toFixed(2)} leva more!`);
    }

}
movieDestination(["200000",
"London",
"Summer",
"7"]);
