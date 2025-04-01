function solve(phonebook){

    let personInfo = {};

    for ( let person of phonebook){
        [name, num1] = person.split(' ');

        if ( Object.hasOwnProperty()){
            personInfo[name] = name;
        }
        
        console.log(`${name} -> ${num1}`);
    }

    //console.log(`${name} -> ${number}`);
    

    


}
solve(["Peter 0888657212", "Bob 0899657212", "Peter 123123"] );