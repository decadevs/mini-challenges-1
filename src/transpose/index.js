/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const transposedArray = [];

    for (let i = 0; i < array[0].length; i++){
        transposedArray.push([]);
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            transposedArray[j][i] = array[i][j];
        }
    }

    return transposedArray;
}

module.exports = transpose;
