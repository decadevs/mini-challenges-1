/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let container = [];
    for(let i = 0; i < str.length; i++){
      let bracket = str[i]
        if(bracket == "[" || bracket == "(" || bracket == "{"){
            container.push(bracket);
        }
        //create variable for popped items and compare.
        //For each closed bracket, a character is popped and saved in variable.
        //Popped character must be corresponding to closed bracket.
    let newContainer;
    if(bracket == "]"){
        newContainer = container.pop();
        if (newContainer !== "["){
            return "invalid";
        }
    }
    else if(bracket == ")"){
        newContainer = container.pop();
        if(newContainer !== "("){
            return "invalid";
        }
    }
    else if (bracket == "}"){
        newContainer = container.pop();
        if(newContainer !== "{"){
            return "invalid";
        }
    }
    }
    //check to confirm the content of [] in conclusion, is empty and even
    if(container.length === 0){
        return "valid";
    }
    else{
        return "invalid";
    }
}
module.exports = isValid;
