function solve(){

    let town = {
        name: "Sofia",
        population: 1234567,
        country: "Bulgaria",
        postcode: "1000"
    }

    for ( let info in town){
        console.log(`${info} -> ${town[info]}`)
    }
    


}
solve()