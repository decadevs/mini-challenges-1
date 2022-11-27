/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

    if(str[0] === '}' || str[0] === ']' || str[0] === ')') return 'invalid'

    if(str.length % 2 != 0) return 'invalid'

    const obj = {
        '{': 0,
        '}': 0,
        '[': 0,
        ']': 0,
        '(': 0,
        ')': 0
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (obj[char]>= 0) obj[char]++
       
    }

    if (obj['{'] != obj['}'] || obj['('] != obj[')'] || obj['['] != obj[']']) return 'invalid'

    for (let i = 0; i < str.length; i++) {

        if (str.includes('()')) {
            str = str.split('()').join('')
        }
        if (str.includes('[]')) {
            str = str.split('[]').join('')
        }
        if (str.includes('{}')) {
            str = str.split('{}').join('')
        }
    }

    if (str == '()' || str == '[]' || str == '{}' || str == "") return 'valid'
    
    let checkBox = ['{]', '{)', '[}', '[)', '(]', '(}']

    for (let i = 0; i < str.length; i++) {
        let check = str[i] + str[str.length-i-1]
        if (checkBox.includes(check)) return 'invalid'
    }
    return 'valid'
}


module.exports = isValid;
