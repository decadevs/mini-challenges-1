/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    //initialisation of expected brackets
    let storedBrackets = "()[]{}";//notice all opening bracket index are at even index

    //variable that will keep records of brackets as it occurred in the user input
    const stackBrackets = [];

    //loop through the input strings i.e str for the underly operations
    for(let eachBracket of str)
    {

        let eachBracketIndex = storedBrackets.indexOf(eachBracket);

        //check if the current item of str is a bracket if not skip to the next item through the index
        if (eachBracketIndex === -1)
        {

            continue; //jump to the next item until you get to the end of str

        }

        if (eachBracketIndex % 2 === 0)
        {

            stackBrackets.push(eachBracketIndex + 1);

        }
        else if (stackBrackets.pop() !== eachBracketIndex)
        {

            return 'invalid';

        }
    }
    return stackBrackets.length === 0? 'valid' : 'invalid';//use this ternary operator to return correct option
}

module.exports = isValid;
console.log(isValid("{}()"));//outputs valid
console.log(isValid("}{()"));//returns invalid
console.log(isValid("({}[])"));//returns valid
