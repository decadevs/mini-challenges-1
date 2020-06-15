/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const result = [];
    for (let j = 0; j < array[0].length; j++) {
        result[j] = Array.from({ length: array.length });
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            result[j][i] = array[i][j];
        }
    }
    return result;
}

module.exports = transpose;