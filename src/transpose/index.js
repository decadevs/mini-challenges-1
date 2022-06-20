/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (!arr[j]) arr[j] = [];
        arr[j][i] = array[i][j];
      }
    }
    return arr;
}

module.exports = transpose;
