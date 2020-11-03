/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {


    if (array) {
        var n = array.length;
        // nexted loop to iterate through the 2d array 
            for (var i = 0; i < n; i++) {
                for (var j = i + 1; j < n; j++) {
                    var temp = array[i][j];
                    //transpose col and rows
                    array[i][j] = array[j][i];
                    array[j][i] = temp;
                }
            }
            return array;
        }
        return null;
}
module.exports = transpose;