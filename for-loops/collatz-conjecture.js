function solve(num){

    let arr = [];

    while ( num !== 1 ){
        arr.push(num);

        if ( num % 2 == 0 ){
            num = num /2;
        }else{
            num = (num * 3) + 1;
        }
        
    }
    arr.push(num);
    console.log(arr.join(' '));
    
}
solve(6)
solve(15)