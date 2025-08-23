function stars(input){

    let budget = Number(input[0]);
    for ( let i=1; i< input.length; i+=2){
        let actor = input[i];
        let salary = Number(input[i+1]);
        let command = input[input.length-1]
        if ( command === 'ACTION'){
            break;
        }else if ( actor.length < 15){
            budget -= salary;
        }else {
            budget *= 0.2
        }
        console.log(salary);
    }
    

}
stars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);