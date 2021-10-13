/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    
    let myArr = [];
    const mappedSymbols = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for(let symbol of str){

        caseA = symbol === '{';
        caseB = symbol === '[';
        caseC = symbol === '(';

        if(caseA | caseB | caseC) myArr.push(symbol);
        else{
            let item = myArr.pop();
            if(mappedSymbols[item] !== symbol ) return 'invalid';
        }
    }
    return (myArr.length === 0) ? 'valid':'invalid';

}

module.exports = isValid;
