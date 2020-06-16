/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let transposedArray = [];
    for (let i = 0; i < array[0].length; i++) {
        transposedArray[i] = new Array(array.length);
    }
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array[0].length; i++) {
            transposedArray[i][j] = array[j][i];
        }
    }
    return transposedArray;
}

module.exports = transpose;
 