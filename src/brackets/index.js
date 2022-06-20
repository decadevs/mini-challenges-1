/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
   const bracketArr= [];
    splittedStr= str.split('');


    for(let i=0; i<splittedStr.length; i++){
      let splittedStrCharacter = splittedStr[i];
      switch(splittedStrCharacter){
        case '(':
        case '{':
        case '[':
          bracketArr.push(splittedStrCharacter);
          break;
        case ')':
        case '}':
        case ']':
          if(bracketArr.length === 0){
              return "invalid";
          }else{
              let poppedBracket= bracketArr.pop();
              if((splittedStrCharacter ==')' && poppedBracket != '(') ||
                  (splittedStrCharacter =='}' && poppedBracket != '{') ||
                  (splittedStrCharacter ==']' && poppedBracket != '[')
              ){
                  return "invalid"
              }
          }
          break;
        default:

      }
    }

      if(bracketArr.length > 0){
          return "invalid";
      }

      return 'valid';

}

module.exports = isValid;
