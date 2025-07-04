function solve(str){

    let result = {};
    for ( let char of str){
        if (result[char]){
            result[char] ++;
        }else {
            result[char] = 1;
        }
    }
    console.log(result);
    


}
solve('aba')
solve('ABA')
solve('')