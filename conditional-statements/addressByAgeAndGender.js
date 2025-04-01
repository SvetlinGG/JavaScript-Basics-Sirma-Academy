function address(age, gender){
    let call = '';

    if ( age <= 16 && gender == 'm'){
        call = 'Master'
    }else if ( age > 16 && gender == 'm'){
        call = 'Mr.'
    }
    if ( age <= 16 && gender == 'f'){
        call = 'Miss'
    }else if ( age > 16 && gender == 'f'){
        call = 'Ms.'
    }
    console.log(call);
    


}
address(14, 'f');
address(17, 'm');
address(10, 'm');
address(32, 'f');