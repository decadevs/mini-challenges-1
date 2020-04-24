/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const res = [];
    for (let j = 0; j < array[0].length; j++) {
        res[j] = new Array(array.length);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            res[j][i] = array[i][j];
        }
    }
    return res;
}

module.exports = transpose;