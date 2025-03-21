function solve(arr){
    let newArr = [];
    //let newArr = Number(arr[0]) + Number(arr[arr.length -1]);
    //let newArr = arr.shift() + arr.pop();
    for ( let i =0; i < arr.length; i++){
        newArr.push(Number(arr[i]));
       
        
    }
    //let sum = newArr[0] + newArr[newArr.length - 1];
    let sum = newArr.shift() + newArr.pop();
    console.log(sum);
    
    

}
solve(['20', '30', '40'])