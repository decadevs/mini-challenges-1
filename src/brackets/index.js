/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

  let arr = [];
  let obj = {'(' : ')', '[' : ']', '{' : '}'};

  for(let i = 0; i < str.length; i++){
    //if the current value is any of the open brackets
    //then push the value into the array.
    if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
      arr.push(str[i]);
    }
    else{
      //pop the last value in the array if the current value is any of the closing brackets
      let curVal = arr.pop();

      //if the current string value is not equal to the object value Return false.
      if(obj[curVal] !== str[i]){return "invalid";}
    }
  }

  //After the loop if the array is not empty, Return false.
  if(arr.length !== 0){return "invalid";}

  return "valid";
}

module.exports = isValid;
