/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result = [];
    for (let col = 0; col < array[0].length; col++) {
        let resultRow = [];
        for (let row = 0; row < array.length; row++) {
            resultRow.push(array[row][col]);
        }
        result.push(resultRow);
    }
    return result;
}

module.exports = transpose;
