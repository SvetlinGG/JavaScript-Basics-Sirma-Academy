function solve(word){

    let newWord = '';

    for ( let i=0; i < word.length; i ++){
        newWord += word[i]
        
    }
    let reversed = newWord.split('').reverse().join('')
    console.log(newWord == reversed);
    
    

}
solve('madam');
solve('girl')