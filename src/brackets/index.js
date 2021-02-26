/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(input) {
  // initiating an empty stack array
  let bracketIndexStack = []

  const check = () => {
    // Declare a variable to store the pair of brackets.
    // Opening brackets have an even index while closing brackets have an odd index
    let matchingBrackets = "[]{}()"

    for (let i = 0; i < input.length; i++) {
      // check the index of the current bracket(from the input string) in machingBrackets 
      // and store it in bracketIndex
      let bracketsIndex = matchingBrackets.indexOf(input[i])

      if (bracketsIndex % 2 === 0) {
        // if bracketIndex is divisible by 2, add 1 to it and push it to the stack.
        // this is done because the matching bracket index would definitely be an odd number
        bracketIndexStack.push(bracketsIndex + 1)

      } else {
        // if bracketIndex is not devisible by 2, remove/pop the last item in the stack.
        // compare the removed/popped item with bracketIndex, return false if they're 
        // not the same and stop the loop.
        if (bracketIndexStack.pop() !== bracketsIndex) {

          return false;

        }

      }
    }

    // the stack would be empty at the end of the loop if the string of brackets is valid
    // the function will as well return true
    return bracketIndexStack.length === 0
  }

  //return "valid if the check function returns true and "invalid if it returns otherwise
  return check() ? "valid" : "invalid"
}

module.exports = isValid;
