function solve(phonebook){

    let personInfo = {};

    for ( let person of phonebook){
        [name, number] = person.split(' ');

        console.log(`${name} -> ${number}`);
        
        //personInfo[number] = number;

    }
    
    

    


}
solve(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"] );