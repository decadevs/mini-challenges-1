/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let key = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 
    };
    let keyMaps = new Map(Object.entries(key));
    let total = 0;
    let arr = roman.split("");
    arr.forEach((element, index) => {
        total += keyMaps.get(element) < keyMaps.get(arr[index + 1]) ? -keyMaps.get(element) : keyMaps.get(element);
    });
    return total;
}

module.exports = romanToDecimal;
