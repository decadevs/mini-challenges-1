/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
   if(str.length%2 > 0){
        return "invalid";
    }
    var check ={ ")":"(", "]":"[", "}":"{" };
    var open=[];
    for(var a=0; a<str.length; a++){
        if(str[a]=="{" || str[a]=="[" || str[a]=="(" ){
            open.push(str[a]);
        }else if(check[str[a]]== open[open.length-1]){
            open.pop();
        }else{
            return "invalid";
        }
    }
    if (str.length ==open.length){
        return "invalid"
    }
    return "valid"
}

module.exports = isValid;
