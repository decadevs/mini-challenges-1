/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    // check if string includes matching brackets
    while(str.includes("()") || str.includes("{}") || str.includes("[]")){
        //keep replacing any instances of matching brackets till there is none
        str = str.replace("()", "");
        str = str.replace("[]", "");
        str = str.replace("{}", "");
    }
    //if there is nothing left in the string return valid
    if (str.length== 0){
        return "valid";
    }
    //if there is something left in the string which must be unmatching brackets return invalid
    else{
        return "invalid"
    }

    //APPROACH 2
    //const array of open brackets
    //const array of close brackets with similar index as its open counterpart
    //while str includes any of the brackets
    //start from the lastIndexof open  bracket and check if the next bracket is its counterpart
    // delete the pair if they match and continue the while loop
    //else return invalid



}

module.exports = isValid;
