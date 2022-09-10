/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */


const characters = {
openSquareBracket: "[",
closeSquareBracket: "]",
openCurlyBrace: "{",
closeCurlyBrace: "}",
openParenthesis: "(",
closeParenthesis: ")",
};
function isValid(str) {
const strArr = str.split("");
console.log(strArr.length);
// Any string with an odd length, beginning with a closing character or ending with an open character automatically renders the string invalid.
if (str.length % 2 == 1) {
    return "invalid";
} else if (
    strArr[0] == characters.closeCurlyBrace ||
    strArr[0] == characters.closeParenthesis ||
    strArr[0] == characters.closeSquareBracket
) {
    return "invalid";
} else if (
    strArr[strArr.length - 1] == characters.openCurlyBrace ||
    strArr[strArr.length - 1] == characters.openParenthesis ||
    strArr[strArr.length - 1] == characters.openSquareBracket
) {
    return "invalid";
}

// confirm that every character has both an equal number of opening and closing characters else string automatically becomes invalid
let openSquareBracketCount = 0;
let closeSquareBracketCount = 0;
let openCurlyBraceCount = 0;
let closeCurlyBraceCount = 0;
let openParenthesisCount = 0;
let closeParenthesisCount = 0;

for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === characters.openCurlyBrace) {
    openCurlyBraceCount++;
    } else if (strArr[i] === characters.openParenthesis) {
    openParenthesisCount++;
    } else if (strArr[i] === characters.openSquareBracket) {
    openSquareBracketCount++;
    } else if (strArr[i] === characters.closeCurlyBrace) {
    closeCurlyBraceCount++;
    } else if (strArr[i] === characters.closeParenthesis) {
    closeParenthesisCount++;
    } else if (strArr[i] === characters.closeSquareBracket) {
    closeSquareBracketCount++;
    }
}
if (openCurlyBraceCount != closeCurlyBraceCount) {
    return "invalid";
} else if (openParenthesisCount != closeParenthesisCount) {
    return "invalid";
} else if (openSquareBracketCount != closeSquareBracketCount) {
    return "invalid";
} else {
    return "valid";
}
}

module.exports = isValid;
  
