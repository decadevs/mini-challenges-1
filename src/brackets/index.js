/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arrbracket = [];
    let openPair = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let closePair = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++){
        let pairs = str[i];

        if (openPair[pairs]) {
            arrbracket.push(pairs)
        } else if (closePair[pairs]) {
            if(openPair[arrbracket.pop()] !== pairs) return false
        }
    }

    // if (str === '' || str == ' ') return 'No bracket pair'
    return arrbracket.length ? 'invalid' : 'valid'
}





module.exports = isValid;
