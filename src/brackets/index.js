/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
   //loop through the braces and  
    //return valid or invalid where necessary.
    let openBraces = [];
    for (let e = 0; e < str.length; e++){
    if (classifyBraces(str[e]) == 'op'){
        openBraces.push(str[e]);
       }else{
           if (verifyBraces(openBraces[openBraces.length - 1], str[e]) == 'op'){
               openBraces.pop();
           }else{
               return "invalid";
           }
        }
   }
   //return ok if the braces are balanced
    if (openBraces.length < 1)
        return "valid";
    else if (openBraces.length == 1)
        return "invalid";
   //if there is error at the last position
   else  if (str.length % 2 == 1)
       return "invalid";
   //if there are only open braces
   else if (openBraces.length === str.length)
       return "invalid";    
}
// creating a function to retun a value for 
// opened braces and another value for closed braces.
function classifyBraces(braces){
    switch(braces){
        case '[':
            return 'op';
        case '(':
            return 'op';
        case '{':
            return 'op';
        case ']':
            return 'cl';
        case ')':
            return 'cl';
        case '}':
            return 'cl';
    }
}
//creating a function that will match the different 
//type of braces and return a value if there is a match.
function verifyBraces(o, c){
    // o means most recent open bracket identified already
    // c means current bracket being examined
    if (o=='[' && c == ']') 
        return 'op';
    else if (o=='{' && c=='}')
        return 'op';
    else if (o=='(' && c==')')
        return 'op';
    else
        return 'cl';  
}
module.exports = isValid;
