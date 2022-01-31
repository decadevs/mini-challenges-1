/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or invalidt the string is valid.
 */


function isValid(str) {
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];


    let charArr = str.split('');
    let curChar, compareChar;
    let charStack = [];

    for(let i = 0; i < charArr.length; i++) {
        curChar = charArr[i];

        //Open bracket situation: push to stack
        if(openBrackets.indexOf(curChar) > -1) {
            charStack.push(curChar);
        }
        //Close bracket situation: compare to last stack value
        else {

            if(charStack.length === 0) {
                return "invalid";
            } else {
                compareChar = charStack.pop();


                if(openBrackets.indexOf(compareChar) !== closeBrackets.indexOf(curChar)) {
                    return "invalid";
                }
            }
        }
    }

    //valid only if all characters accounted for
    if(charStack.length === 0) {
        return "valid";
    } else {
        return "invalid";
    }




}


module.exports = isValid;
