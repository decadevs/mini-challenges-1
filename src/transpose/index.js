/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposedArray = [];
    for (var i = 0; i < array[0].length; i++) {
        var innerarray = [];
        for (var j = 0; j < array.length; j++) {
            innerarray.push(array[j][i]);
        }
        transposedArray.push(innerarray);
    }
    return transposedArray;
}

module.exports = transpose;
