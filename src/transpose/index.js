/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    if(array.length === 0) {
        return [];
    }
    let rows = array[0].length;
    let columns = array.length;
    let result = [];
for(let i = 0; i < rows; i++){
    result[i] = [];
    for(let j = 0; j < columns; j++){
        result[i][j] = array[j][i]
    }
}
return result;
}

module.exports = transpose;
