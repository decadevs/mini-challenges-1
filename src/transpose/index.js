/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

// create a new arr and fill with nested arr (no of column)
let transposeArr = [];
for(let i = 0; i < array[0].length; i++){
    transposeArr.push([])
}




for (let row = 0; row < array.length; row++){
    for(let col = 0; col< array[row].length; col++){
        transposeArr[col].push (array[row][col])
    }
}

return transposeArr
}

module.exports = transpose;
