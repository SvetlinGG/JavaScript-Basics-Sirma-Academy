function days(number){

    let day = '';

    if ( number == 1){
        day = 'Monday';
    }else if (number == 2){
        day = 'Tuesday';
    }else if (number == 3){
        day = 'Wednesday';
    }else if (number == 4){
        day = 'Thursday';
    }else if (number == 5){
        day = 'friday';
    }else if (number == 6){
        day = 'Saturday';
    }else if (number == 7){
        day = 'Sunday';
    }else{
        day = 'Error'
    }
    console.log(day);
    

}
days(1);
days(2);
days(4);
days(6);
days(7);
days(10);