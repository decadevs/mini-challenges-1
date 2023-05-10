/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let brackets=[
        {open: '{', close: '}'}, 
        {open: '[', close:']'}, 
        {open: '(', close: ')'}
        ]
        
        let checkstr=[];
        str=str.split('');
        for(let i=0; i<str.length; i++){
            for(let j=0; j<brackets.length; j++){
                if(str[i]===brackets[j].open){
                    checkstr.push(brackets[j].open)
                    break;
                }else if(str[i]===brackets[j].close){
                    if(brackets[j].open !== checkstr.pop())
                    return "invalid";
                }
            }
        }
        
        
        return "valid";
}

module.exports = isValid;
