/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    if (str.length % 2 === 1 || str.length === 0 || str[0] === ')' || str[0] === ']' || str[0] === '}')
        return 'invalid'

    str = str.split('')
    let bracketsLog = [0, 0, 0] // for '(', '[' and '{' respectively
    let isOpen = false, prevIndex = 0

    let updateLog = (element, index) => {
        if (element === '(' || element === '[' || element === '{') {
            bracketsLog[index] += 1
            isOpen = true
            prevIndex = index
            return bracketsLog[index]
        } else {
            if (isOpen) 
                if (index !== prevIndex) 
                    return -1
            bracketsLog[index] -= 1
            isOpen = false
            prevIndex = index
            return bracketsLog[index]
        }
    }

    for (const element of str) {
        if (element === '(' || element === ')') {
            if (updateLog(element, 0) < 0) 
                return 'invalid'
        }
        else if (element === '[' || element === ']') {
            if (updateLog(element, 1) < 0) 
                return 'invalid'
        }    
        else {
            if (updateLog(element, 2) < 0) 
                return 'invalid'
        }            
    }

    if (Math.max(...bracketsLog) === 0 && Math.min(...bracketsLog) === 0) 
        return 'valid'
    else return 'invalid'
}

module.exports = isValid;
