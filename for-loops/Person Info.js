function person(firstName, lastName, age){

    let personObj = {
        firstName : firstName,
        lastName : lastName,
        age : age,
    }

    let entries = Object.entries(personObj);
    for ( let element of entries){
        console.log(element.join(': '));
    }

}
person("Peter", 
"Pan",
"20");