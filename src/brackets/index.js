/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    var brac = str.split('');
    var aa = ['(','[','{'];
    var bb = [')',']','}'];
    var ans = [];
    for (var i = 0; i < brac.length; i++) {
        if (brac[i] == '(' || brac[i] == '[' || brac[i] == '{') {
            ans.push(brac[i]);
        }  
        else if (brac[i] == ')' || brac[i] == ']' || brac[i] == '}') {
            var ind = bb.indexOf(brac[i]);
            if(ans[ans.length - 1] === aa[ind] ) {
                var rem = ans.pop();
            }
            else {
                ans.push(brac[i]);
            }  
        }
    }
    if (ans.length == 0) {
        return "valid";
    }
    else {
        return "invalid";
    }
}

module.exports = isValid;
