/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let store = [];
  for (let index = 0; index < str.length; index++) {
    //         check if number of braces are even
    if (str.length % 2 !== 0) {
      return "invalid";
    }
    //        Check if brace is an opening brace
    if (str[index] === "(" || str[index] === "{" || str[index] === "[") {
      //          push open braces in store
      store.push(str[index]);
    } else {
      //         push out matching braces for the store and sore currently removed brace in a variable called pushed
      let pushed = store.pop(str);

      //         check if the pushed brace is the pair of the current brace being looped over
      if (str[index] !== bracket[pushed]) {
        return "invalid";
      }
    }
  }
  // check if every brace has been paired and store has become empty
  if (store.length !== 0) {
    return "invalid";
  }
  return "valid";
}
module.exports = isValid;
