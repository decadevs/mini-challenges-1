/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        for (var j = 0; j < item.length; j++) {
            newArr.push(arr.splice([i][j], 1));
        }
    }
    return newArr;
}