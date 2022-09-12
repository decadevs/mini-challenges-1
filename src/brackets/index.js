/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// function isValid(str) {}

// module.exports = isValid;


var input1, input2, input3;

function isValid(str) {
  var stack, top;
  stack = [];

  for (let i =0; i <str.length; i++){
    let paren = str[i]

    if (paren === "(" || paren === "[" || paren === "{") {
      stack.push(paren);
    } else {
      if (!stack) {
        console.log(str, "contains invalid parentheses.");
        // return;
      } else {
        top = stack.slice(-1)[0];

        if (paren === ")" && top === "(" || paren === "]" && top === "[" || paren === "}" && top === "{") {
          stack.pop();
        }
      }
    }
  }

  if (!stack) {
    console.log(str, "contains valid parentheses.");
  } else {
    console.log(str, "contains invalid parentheses.");
  }
}


input1 = "{{}}()[()]";
input2 = "{][}";
input3 = ")";
isValid(input1);
isValid(input2);
isValid(input3);
module.exports = isValid;

