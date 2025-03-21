function solve(money, studentsCount, priceLightsabers, priceRobes, priceBelts){

    let totalMoney = priceLightsabers * Math.ceil(studentsCount * 1.1) + priceRobes * (studentsCount) + priceBelts *  studentsCount;
    
    if ( money >= totalMoney){
        console.log(`The money is enough - it would cost ${totalMoney.toFixed(2)}lv.`); 
    }else{
        let moneyNeeded = totalMoney - money;
        console.log(`George Lucas will need ${moneyNeeded.toFixed(2)}lv more.`);
        
    }
    
    console.log(Math.ceil(studentsCount * 1.1));
    
    


}
solve(100, 2, 1.0, 2.0, 3.0);
solve(100, 42, 12.0, 4.0, 3.0);
