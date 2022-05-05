/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    if (str.length % 2 !== 0) {
        return console.log("invalid");
        } 
    if (str.indexOf("}") < str.indexOf("{") || str.indexOf(")") < str.indexOf("(") || str.indexOf("]") < str.indexOf("[") ) {
        return console.log('invalid')
        }
    for (let i = 0; i < str.length; i++){
    if (str[i]=== '{') {
    let re = str.match(/\d\{\d/g).length === str.match(/\d\}\d/g).length ? "valid": "invalid";
    return console.log(re);
    }
    if (str[i] === '(') {
        let re = str.match(/\d\(\d/g).length === str.match(/\d\)\d/g).length ? "valid" : "invalid";
        return console.log(re); 
        }
    if (str[i]=== '[') {
         let re = str.match(/\d\[\d/g).length === str.match(/\d\]\d/g).length ? "valid": "invalid";
        return console.log(re);
        }
        }
}

module.exports = isValid;
