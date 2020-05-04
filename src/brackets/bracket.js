/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let str2 = str.slice(0);
    
    let count1 = 0; 
    let count2 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '[' || str[i] === '('){
            count1++;
        } else {
            count2++;
        }
    }
    if (count1 === count2) {
        for (let i = 0; i < str.length; i++){
            if (str[i] === '{') {
                if (str[i+1] === '}') {
                    continue;
                } else {
                    for (let j = str2.length; j > i; j--) {
                        if (str[j] === '}') {
                        str[j] = '';
                            continue;
                        } else {
                            return "invalid";
                        }
                    }  
                }
                
            }
            if (str[i] === '[') {
                if (str[i+1] === ']') {
                    continue;
                } else {
                    for (let j = str2.length; j > i; j--) {
                        if (str[j] === ']') {
                            str[j] = '';
                            continue;
                        } else {
                            return "invalid";
                        }
                    }  
                }
    
            }
            if (str[i] === '(') {
                if (str[i+1] === ')') {
                    continue;
                } else {
                    for (let j = str2.length; j > i; j--) {
                        if (str[j] === ')') {
                            str[j] = '';
                            continue;
                        } else {
                            return "invalid";
                        }
                    }  
                }
    
            }
        }
        return "valid";
    }
    return "invalid";
}

// module.exports = isValid;
