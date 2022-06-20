/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let newArr = [];
    let popped;

    //Map the required pattern (of brackets needed) to an object
    const objectMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    
    for (let i = 0; i < str.length; i++){
        if (str[i] === '(' || str[i] === '{' || str[i] === '['){
            newArr.push(str[i]);
        }
    //For every right bracket, pop out a (left) bracket from newArr 
        else if (str[i] === ')' || str[i] === '}' || str[i] === ']'){
            let popped = newArr.pop();

    //Map the bracket in variable 'popped' to the object above and check if it's value matches str[i].
            if (str[i] !== objectMap[popped]){
                return "invalid";
            }
        };
    }

    if (newArr.length !== 0){
        return "invalid" ;
    }
//if all the above statement are not met, then return 'valid'.
    else return "valid";
}

module.exports = isValid;
