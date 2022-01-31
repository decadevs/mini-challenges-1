/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(n) {
    let obj = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let result = [];

    for (let i = 0; i < n.length; i++) {
        if (obj[n[i]] < obj[n[i+1]]) {
            result.push(obj[n[i+1]] - obj[n[i]]);
            i++;
            //continue;
        } else {
            result.push(obj[n[i]]);
        }
    }
    return result.reduce((a,b) => a + b, 0);
}

module.exports = romanToDecimal;
