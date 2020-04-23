/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let sum = 0;
    const decimal = new Map();
    decimal.set("I", 1);
    decimal.set("V", 5);
    decimal.set("X", 10);
    decimal.set("L", 50);
    decimal.set("C", 100);
    decimal.set("D", 500);
    decimal.set("M", 1000)
    let strArray = roman.split("");

    for (let i = 0; i < strArray.length; i++) {
        let active = decimal.get(strArray[i])
        let next = decimal.get(strArray[i + 1])

        if (active >= next || next === undefined) {
            sum += active
        }else {
            sum += (next - active)
            i++
            }
        }
    return sum
}

module.exports = romanToDecimal;
