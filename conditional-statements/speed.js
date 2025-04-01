function speed(km){

    let fast = '';
    if ( km <= 10){
        fast = 'slow';
    }else if (km <= 60){
        fast = 'average';
    }else if (km <= 120){
        fast = 'fast';
    }else if (km <= 160){
        fast = 'super-fast';
    }else {
        fast = 'turbo-fast'
    }
    console.log(fast);
    


}
speed(10);
speed(59);
speed(120);
speed(121);
speed(181);
speed(59.9);
speed(60.01);