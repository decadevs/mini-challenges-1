/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let box = 0, curl = 0, curve = 0;
    let boxClose = false, curlClose = false, curveClose = false;

    //str.split();
    str.split('').forEach(element => {

        if (element == "[" || element == "]") {

        } else if (element == "{" || element == "}") {

        } else if (element == "(" || element == ")") {

        }

        switch(element){
            case "{":
                curl +=1
                break;
            case "}":
                curl -=1
                break;
            case "[":
                box +=1
                break;
            case "]":
                box -=1
                break;
            case "(":
                curve +=1
                break;
            case ")":
                curve -=1
                break;
        }
    });

    if (curve == 0 && box == 0 && curl == 0){
        return "valid";
    } else{
        return "invalid";
    }
}

module.exports = isValid;
