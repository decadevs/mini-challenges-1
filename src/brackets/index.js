/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
   let empty = [];
   let open;
   for(var i in str){
       if(str[i] == "(" || str[i] == "{" || str[i] == "["){
           empty.push(str[i]);
       } else if(str[i] == ")" || str[i] == "}" || str[i] == "]") {
           if( empty.length == 0 ){
               return "invalid";
           }
           open = empty.pop();
           if(
               ( open == "(" && str[i] != ")") ||
               ( open == "{" && str[i] != "}") ||
               ( open == "[" && str[i] != "]")
           ){
               return "invalid"
           }
       }
   }
   if(empty.length > 0 ){
       return "invalid";
   }
   return "valid";
}

module.exports = isValid;
