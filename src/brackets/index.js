/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let box = 0, curl = 0, curve = 0;
    let boxClose = true, curlClose = true, curveClose = true;

    str.split('').forEach((element, i, arr) => {
        let prev = arr[i-1];

        if (element == "[") {
            box += 1
            boxClose = false;
        } else if (element == "]"){
            if(prev == "{" || prev == "("){
                return "invalid";
            }
            box -= 1
        } else if (element == "{") {
            curl += 1
            curlClose = false;
        } else if (element == "}") {
            if (prev == "[" || prev == "(") {
              return "invalid";
            }
            curl -= 1
        } else if (element == "(") {
            curve += 1
            curveClose = false;
        } else if (element == ")") {
            if (prev == "{" || prev == "[") {
              return "invalid";
            }
            curve -= 1
        }
    });

    if (curve == 0 && box == 0 && curl == 0){
        return "valid";
    } else{
        return "invalid";
    }
}

module.exports = isValid;
