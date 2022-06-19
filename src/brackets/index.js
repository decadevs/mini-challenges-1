/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

    // Create a string template of a valid brackets
    let validBrackets = '[]{}()';

    // create a stack array to hold stack occurences
    let stackOccurence = [];

    // A for...of loop is used to access string element (rather than indexs for regular for loops)
    for (let elem of str){
        // Get the index at which input bracket occur in validBrackets
        let bracketIndex = validBrackets.indexOf(elem)

        // from validBrackets, we Openings will have even indexes [0, 2, 4] and
        // Closings will have odd indexes [1, 3, 5]

        if(bracketIndex % 2 === 0){
            stackOccurence.push(bracketIndex + 1) // Push the opposite of whats found
        }else{
            // Pop out the element and check if it matches current bracketIndex
            let oddElem = stackOccurence.pop()
            if(oddElem !== bracketIndex){
                return 'invalid'
            }
        }
    }
    // if valid, stackOccurence array must have popped out all matching brackets
    if(stackOccurence.length === 0){
        return 'valid'
    }else{
        return 'invalid'
    }
}

module.exports = isValid;
