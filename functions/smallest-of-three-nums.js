function solve(n1, n2, n3){

    let result = 0;

    if ( n1 < n2){
        result = n1;
    }else if ( n2 < n3){
        result = n2;
    }else if ( n1 > n3){
        result = n3
    }
    console.log(result);
    

}
solve(2, 5, 3);
solve(600, 340, 123);