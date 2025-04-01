function solve(arr1, arr2){

    let numArr1 = arr1.map(num => Number(num));
    let numArr2 = arr2.map(num => Number(num));
    let sum1 = 0;
    let sum2 = 0;
    let indexI = 0;
    

    for ( let i = 0; i < numArr1.length; i ++){
        indexI = i;
        sum1 += numArr1[i];
        sum2 += numArr2[i];
        if ( numArr1[i] !== numArr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
        }
    };
    if ( sum1 === sum2){
        console.log(`Arrays are identical. Sum: ${sum1}`);
        
    }
    
    
    

    
    

}
solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10'])