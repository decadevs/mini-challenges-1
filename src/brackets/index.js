/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let isOpen = [];
    let openBraces = ['(','[','{'];     //Opening braces and closing braces are hard coded 
    let closedBraces = [')',']','}'];   //to match a uniform index in both arrays.
    let arr = str.split('');            //split the given string into an iterable
    if(closedBraces.includes(str[0]))   //string is invalid if it starts with a closing brace
    return 'invalid';
    arr.map(char => {
        if(openBraces.includes(char)) {     //push to the isOpen array if the element
            isOpen.push(char);              //is an opening brace
        }
        else {
            if(closedBraces.indexOf(char) ==    //for a closing brace, this checks for uniformity
            openBraces.indexOf(isOpen[isOpen.length - 1])) {    //by checking the hard coded index
                isOpen.pop();       //of the brace against the hard coded index of the last opening
            }                       //brace. This would let us know they compliment. Afterwards, we
            else {                  //we pop that element if uniform, else the string is invalid.
                return 'invalid'
            }
        }
    })
    if (!isOpen.length) {       //string is valid if all braces have been closed
        return 'valid'
    }
    else {
        return 'invalid'        //string is invalid if all braces have not been closed.
    }
}

module.exports = isValid;