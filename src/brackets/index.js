/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

 function isValid(str) {
    const count = str.length
    const open_bracket = "("
    var ob_count= 0
    const open_square_bracket = "["
    var osb_count = 0
    const open_curly_bracket = "{"
    var ocb_count = 0
    const close_bracket = ")"
    var cb_count = 0
    const close_square_bracket = "]"
    var csb_count = 0
    const close_curly_bracket = "}"
    var ccb_count = 0 
    
    for (let char of str) {
        if (char == open_bracket) {
            ob_count ++
        } else if (char == open_square_bracket) {
            osb_count++
        } else if (char == open_curly_bracket) {
            ocb_count++
        } else if (char == close_bracket) {
            cb_count++
        }else if (char == close_square_bracket) {
            csb_count++
        } else if (char == close_curly_bracket) {
            ccb_count++
        }
    }

    if (count < 3) {
        if (str.includes("()") || str.includes("[]") || str.includes("{}")) {
            return "valid"
        }
        else {
            return "invalid"
        }
    }
    else {
        if (str.includes("(}") || str.includes("(]") ||
        str.includes("{)") || str.includes("{]") || str.includes("[)") || str.includes("[}") ) {
            return "invalid"
        } 
        else if ((ob_count != cb_count) || (osb_count != csb_count) || (ocb_count  != ccb_count)) {
            return "invalid"
        }
        else {
            return "valid"
        } 
    }   
}

module.exports = isValid;
