/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result = [];
    let col = array[0].length;
    let row = array.length;
    for(let i =0; i < col; i++){
        let newCol = [];
        for(let j = 0; j < row; j++) newCol.push(array[j][i]);
        result.push(newCol);
    }
    return result;
    
    
}

module.exports = transpose;
