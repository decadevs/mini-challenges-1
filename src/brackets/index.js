/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  splitStr = str.split('');
  let resultArr = [];
  let validStr = "valid";

  for(let i=0; i < splitStr.length; i++){
    let bracket = splitStr[i];

    switch(bracket){
      case '(':
      case '{':
      case '[':
        resultArr.push(bracket);
        break;
      case ')':
      case '}':
      case ']':
        if(resultArr.length == 0){
            validStr= "invalid";
        }
        else{
            let poppedBracket = resultArr.pop();
            if((bracket ==')' && poppedBracket !== '(') ||
                (bracket =='}' && poppedBracket !== '{') ||
                (bracket ==']' && poppedBracket !== '[')
            ){
                validStr = "invalid"
            }
        }
        break;
      default:
    }
  }
    return resultArr.length > 0 ? validStr = "invalid" : validStr;
}

module.exports = isValid;
