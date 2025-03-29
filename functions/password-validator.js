function solve(word){

    let result = '';
    let digitCount = 0;

    for ( let i = 0; i < word.length; i++){
        
        if ( i < 6 || i > 10){
            result = 'Password must be between 6 and 10 characters'; 
        }else if ((!isNaN(word[i]) && word[i] !== ' ')){
            digitCount ++;
            result = 'Password must consist only of letters and digits';
        }
        if ( digitCount >= 2){
            result = 'Password must have at least 2 digits';
        }
        
    }
    console.log(result);
    
}
solve('pass');
//solve('APass123');