/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function chechBracket(str){
    let bracket = [];
    let opening = '({[';
    let closing = ')}]';
    let matching = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let i = 0; i < str.length; i++){
        console.log(str[i])
        if(opening.includes(str[i])){
            bracket.push(str[i]);
        } else if(closing.includes(str[i])){
            const lastBracket = bracket.pop();

            if(matching[str[i]] != lastBracket){
                return "invalid";
            }
        }
        
    }
    if(bracket.length == 0){
        return "valid"
    } else{
        return "invalid";
    }
}
console.log(chechBracket("()()()()()"));