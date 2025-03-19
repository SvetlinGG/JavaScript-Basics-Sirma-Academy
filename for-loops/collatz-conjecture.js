function solve(num){

    let arr = [];

    for ( let i = num; i >= 1; i--){
        
        
        if ( i % 2 == 0){
            num[i] = num[i] / 2;
            arr.push(num[i]);
        }else{
            num[i] = (num[i] * 3) + 1;
            arr.push(num[i]);
        }
        
        
    }
    console.log(arr);
    
}
solve(6)