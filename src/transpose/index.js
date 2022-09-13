/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let [rolling] = array;
    return rolling.map((val, columns) => array.map(rolling => rolling[columns]))

}

module.exports = transpose;
