function solve(word){

    let sumVowels = 0;

    for (let i=0; i < word.length; i ++){
        if ( word[i] == 'a'){
            sumVowels += 1;
        }else if (word[i] == 'e'){
            sumVowels += 2;
        }else if (word[i] == 'i'){
            sumVowels += 3;
        }else if (word[i] == 'o'){
            sumVowels += 4;
        }else if (word[i] == 'u'){
            sumVowels += 5;
        } 
    }
    console.log(sumVowels);
    

}
solve('hello');
solve('bye')
solve('beer');