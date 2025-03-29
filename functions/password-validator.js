// function solve(word){

//     let result = '';
//     let digitCount = 0;

//     for ( let i = 0; i < word.length; i++){
        
//         if ( i < 6 || i > 10){
//             result = 'Password must be between 6 and 10 characters'; 
//         }else if ((!isNaN(word[i]) && word[i] !== ' ')){
//             digitCount ++;
//             result = 'Password must consist only of letters and digits';
//         }
//         if ( digitCount >= 2){
//             result = 'Password must have at least 2 digits';
//         }
        
//     }
//     console.log(result);
    
// }
// solve('pass');
//solve('APass123');
function isValidPassword(password) {
    let isValid = true;

    if (!isLengthValid(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    
    if (!isAlphaNumeric(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    
    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

function isLengthValid(password) {
    return password.length >= 6 && password.length <= 10;
}

function isAlphaNumeric(password) {
    for (let char of password) {
        if (!(char >= '0' && char <= '9') && !(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
            return false;
        }
    }
    return true;
}

function hasAtLeastTwoDigits(password) {
    let digitCount = 0;
    for (let char of password) {
        if (char >= '0' && char <= '9') {
            digitCount++;
        }
        if (digitCount >= 2) {
            return true;
        }
    }
    return false;
}

// Example usage:
isValidPassword("pass");     // Fails length & digit check
//isValidPassword("APass123"); // Valid
//isValidPassword("Pa$s$s");   // Fails alphanumeric & digit check
