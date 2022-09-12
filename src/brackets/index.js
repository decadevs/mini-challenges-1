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
    
    const converToArray = str.split('')
    for (let char of converToArray) { // loop trought all charracters of input

        if(openBrackets.includes(char)){ // if its oppening bracket
            holder.push(char)
        }else if(closedBrackets.includes(char)){ // if its closing
            const openPair = openBrackets[closedBrackets.indexOf(char)] // find its pair
            if(holder[holder.length - 1] === openPair){ // check if that pair is the last element in the array
                holder.splice(-1,1) // if so, remove it
            }else{ // if its not
                holder.push(char)
                break // exit loop
            }
        }
    }
    
    if (holder.length === 0){
        return "valid"
    }else{
        return "invalid"
    }

}

module.exports = isValid;
