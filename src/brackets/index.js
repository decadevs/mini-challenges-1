/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

    if (str.length <= 1){
        return "invalid"
    }

    let parenthesis, paren;
    let stack = [];

    let leftParen = ['[', '{', '('];
    let rightParen = [']', '}', ')'];

    for(let i = 0; i < str.length; i++){

        paren = str[i];

        if(leftParen.indexOf(paren) > -1){

            stack.push(leftParen.indexOf(paren));
        }

            
        else if(rightParen.indexOf(paren) > -1){

            if(stack.length === 0 ) return "invalid";
            
            if(stack.pop() !== rightParen.indexOf(paren)) return "invalid";
            
        
        }
    }

    if(stack.length !== 0){
        return "invalid"

    }

    return "valid"

}


module.exports = isValid;