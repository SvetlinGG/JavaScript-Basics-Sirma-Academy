function miner(arr){
    let minerTask = {};

    for ( let i=0; i < arr.length; i+=2){
        let material = arr[i];
        let quantity = Number(arr[i+1]);
        minerTask[material] = quantity;
        if ( !minerTask.hasOwnProperty(material)){
            minerTask[material] += quantity;
        }else {
            minerTask[material]  = quantity;
        }
    }
    let entries = Object.entries(minerTask)
    for ( let [resourse, quantity] of entries ){
        console.log(`${resourse} -> ${quantity}`);
    }

}
miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);