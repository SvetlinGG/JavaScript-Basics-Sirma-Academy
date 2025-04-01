// function sum(a, b,){
//     return a + b;
// }

// function subtract(result, c){
//     return result - c;
// }

// function calculate(a, b, c){
//     let sumResult = sum(a, b);
//     let finalResult = subtract(sumResult, c);

//     return finalResult;
// }
// console.log(calculate(23, 6, 10));


function sum(a, b){
    return a + b;
}

function subtract(result, c){
    return result - c;
}

function calculate(a, b, c){
    let sumResult = sum(a, b);
    let finalResult = subtract(sumResult, c);
    return finalResult;
}
console.log(calculate(1, 17, 30));

