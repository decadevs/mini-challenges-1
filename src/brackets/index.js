/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  if(typeof str !== "string"){
    throw TypeError('Invalid entry, try again');
  }
  let openingBraces = ["[","(","{"];
  let closingBraces = ["]",")","}"];
  const queue = [];
  for(let i=0; i < str.split("").length; i++){
    if(openingBraces.includes(str[i])){
      queue.push(str[i]);
    }else{
      let lastOnQueue = queue.pop();
      let idxOfLastChar = openingBraces.indexOf(lastOnQueue);
      if(closingBraces[idxOfLastChar] !== str[i]){
        return 'invalid';
      }
    }
  }
  if(queue.length !== 0) return 'invalid';
  return 'valid';
}

module.exports = isValid;
