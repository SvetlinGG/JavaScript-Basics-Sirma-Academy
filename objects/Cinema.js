function cinema(input){

    let capacity = Number(input[0]);
    let command = '';
    let ticketPrice = 5;
    let sum = 0;
    let total = 0;
    let peopleCount = 0;
    let money = 0;
    for ( let i=1; i < Number(input.length-1); i++){
        total += Number(input[i]);
        peopleCount = Number(input[i])
        
    }
    if ( command = 'Movie time!'){
        let people = capacity - total;
        
        console.log(`There are ${people} seats left in the cinema.`);
        
    }
    if ( peopleCount % 3 ==0){
        sum = (peopleCount * ticketPrice) - 5;
        
    }else {
        money = peopleCount * ticketPrice;
    }
    money += sum;
    console.log(`Cinema income - ${sum} lv.`);

     
    if ( total >= capacity){
        console.log(`The cinema is full.`);
    }
    
    



}
cinema(["60",
"10",
"6",
"3",
"20",
"15",
"Movie time!"]);
