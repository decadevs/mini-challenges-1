/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
/* function isValid(str) {}

} */

function isValid(str) {
    const bracketsPair = {
        '}':'{',
        ')':'(',
        ']':'['
    }
    const openBrackets = Object.values(bracketsPair)
    const closeBrackets = Object.keys(bracketsPair)
    let holdBrackets = []

    for(index in str){
       if(openBrackets.includes(str[index])){
            holdBrackets.push(str[index])
            console.log(index)
        }else{
            if(bracketsPair[str[index]] === holdBrackets[holdBrackets.length - 1]){
                holdBrackets.pop()
            }else{return 'invalid'}
        
        }
    }
    return holdBrackets.length === 0 ? 'valid' : 'invalid'
}

console.log(isValid(']]'))

module.exports = isValid;
