function numbers(num){

    let word = '';

    if (num == 1){
        word = 'one';
    }else if ( num == 2){
        word = 'two';
    }else if ( num == 3){
        word = 'three';
    }else if ( num == 4){
        word = 'four';
    }else if ( num == 5){
        word = 'five';
    }else if ( num == 6){
        word = 'six';
    }else if ( num == 7){
        word = 'seven';
    }else if ( num == 8){
        word = 'eight';
    }else if ( num == 9){
        word = 'nine';
    }else{
        word = 'too big'

    }

    console.log(word);
    

}
numbers(7);
numbers(5);
numbers(10);