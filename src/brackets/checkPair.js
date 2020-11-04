function checkPair(open, close) {
    if (open === "(" && close === ")") {
        return true;
    } else if (open === "{" && close === "}") {
        return true;
    } else if (open === "[" && close === "]") {
        return true;
    } else {
        return false;
    }
}

module.exports = checkPair;