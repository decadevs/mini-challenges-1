/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    var arr = roman.split("");
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item === "M") {
            arr.splice(i, 1, 1000)
        } else if (item === "D") {
            arr.splice(i, 1, 500)
        } else if (item === "C") {
            arr.splice(i, 1, 100)
        } else if (item === "L") {
            arr.splice(i, 1, 50)
        } else if (item === "X") {
            arr.splice(i, 1, 10)
        } else if (item === "V") {
            arr.splice(i, 1, 5)
        } else if (item === "I") {
            arr.splice(i, 1, 1)
        }
    } 
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (i === 0) {
            newArr.push(item);
        } else {
            var lastNew = newArr[newArr.length-1]
            if (item < lastNew || item === lastNew) {
                newArr.push(item);
            } else if (item > lastNew) {
                var adjustNum = item-2*lastNew
                newArr.push(adjustNum);
            }
        }
    }
    return newArr.reduce((a, b) => a + b, 0);
}

module.exports = romanToDecimal;
