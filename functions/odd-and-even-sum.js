function sum(num){

    let numToStr = num.toString().split('');
    let evenSum = 0;
    let oddSum = 0;

    numToStr = numToStr.map((num) => Number(num));
    for ( let i = 0; i < numToStr.length; i++){
        if ( numToStr[i] % 2 ===0 ){
            evenSum += numToStr[i];
        }else {
            oddSum += numToStr[i];
        }
    }
    
    
    return`Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    
    
    
    
}
console.log(sum(1000435));
