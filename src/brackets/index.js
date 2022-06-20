/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  // var valid = function(str){
  //first we define the values
  const hashMap = {
    '(': ')',
    '[': ']',
    '{': '}'};

  //assign an empty variable to the array bracket

  const stack = [];
  // iterate through
  for(let ch of str){
      if(hashMap [ch]){
          //ch is an opening bracket

          stack.push(hashMap[ch])

      }else if(stack.pop() !== ch){
        return "invalid"
      }
  }
  if(stack.length>0){
    return "invalid"
  }else{
    return "valid"
  }
}

module.exports = isValid;
