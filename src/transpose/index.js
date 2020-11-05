/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    var number = [];
    for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j <array[i].length; ++j) {
            if (array[i][j] === undefined) continue;
            if (number[j] === undefined) number[j] = [];
        number[j][i] = array[i][j];
        }
    }
    return number;
}


module.exports = transpose;
