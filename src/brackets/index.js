/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
    brackets = '(){}[]';
    const strArr = str.split('')
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(strArr[i] === '(' || strArr[i] === '[' || strArr === '{'){
            count++
        }else if(strArr[i] === ')' || strArr[i] === ']' || strArr === '}' ){
            count--;
        }
        if(count < 0){
            return 'invalid'
        }
    }
    if(count === 0){
        return 'valid'
    }
    return 'invalid';
    
}

 console.log(isValid('[{[][]}]'));
module.exports = isValid;