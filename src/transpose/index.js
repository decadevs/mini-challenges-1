/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    var newArr = [];
    for (var i = 0; i < array[0].length; i++) {
        var column = [];
        for (var j = 0; j < array.length; j++) {
            column.push(array[j][i]);
        }
        newArr.push(column);
    }
    return newArr;
}
module.exports = transpose;