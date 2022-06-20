/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  //create an array to hold open brackets
  let store = [];

  //loop through array to check for brackets
    for (let i = 0, n = str.length; i < n; i++){
      let item = str[i];
      //if any open bracket is found, store it in the array
      if (item == "{" || item == "[" || item == "("){
        store.push(item);
      }
      //if any close bracket is found, remove last iem in the array
      //then check if popped item is its corresponding open bracket
      //if it is not, return invalid
      let poppedItem;
      if (item == ")"){
          poppedItem = store.pop();
          if (poppedItem !== "("){
              return "invalid";
          }
      }
      else if (item == "}"){
          poppedItem = store.pop();
          if (poppedItem !== "{"){
              return "invalid";
          }
      }
      else if (item == "]"){
          poppedItem = store.pop();
          if (poppedItem !== "["){
              return "invalid";
          }
      }
    }
    //if the array is empty at the end of the iteration, return Valid
    //otherwise the string of brackets is invalid
    if (store.length === 0){
        return "valid";
    }
    else{
        return "invalid";
    }
}

module.exports = isValid;
