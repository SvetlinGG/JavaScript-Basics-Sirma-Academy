function solve(text){

    let convertText = JSON.parse(text);
    for ( let info in convertText){
        console.log(`${info}: ${convertText[info]}`);
        
    }
    


}
solve('{"name": "Ivan", "age": 40, "town": "Sofia"}')