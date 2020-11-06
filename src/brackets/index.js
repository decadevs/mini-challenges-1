/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const holder = []
    const openBrackets = ['(','{','[']
    const closedBrackets = [')','}',']']
    for (let letter of str) {
        if(openBrackets.includes(letter)){
            holder.push(letter)
        }else if(closedBrackets.includes(letter)){
            const openPair = openBrackets[closedBrackets.indexOf(letter)];
            if(holder[holder.length - 1] === openPair){
                holder.splice(-1,1) 
            }else{ 
                holder.push(letter)
                break 
            }
        }
    }
    return holder.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;
