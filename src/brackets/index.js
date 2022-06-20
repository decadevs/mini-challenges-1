/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
    let stack = [];
for(let i of str) {
    if(i === "{" || i === "[" || i === "(") {
        stack.push(i);
    }
    else if(stack.length !== 0 && i === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
    }
    else if(stack.length !== 0 && stack[stack.length - 1] === "[" && i === "]") {
        stack.pop();
    }
    else if(stack.length !== 0 && stack[stack.length - 1] === "(" && i === ")") {
        stack.pop();
    }
    else {
        return "invalid";
    }
}
return stack.length ? "invalid" : "valid";
}

module.exports = isValid;
