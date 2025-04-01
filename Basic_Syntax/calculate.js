function calculate(num1, num2){

    let sum = num1 + num2;
    let difference = Math.abs(num1 - num2);
    let multiply = num1 * num2;
    let average = ( num1 + num2 ) / 2;

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${multiply}`);
    console.log(`Average: ${average}`);
    


}
calculate(25, 5);
calculate(7, 14);