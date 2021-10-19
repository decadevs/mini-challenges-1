/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let row = array.length;
    let column = array[0].length;
    let matrix = [];
    
    for(let i = 0; i < column; i++) {
      matrix[i] = [];
      for(j=0; j < row; j++) {
        matrix[i][j] = array[j][i]
      }
    }
    return matrix;
  }
  
module.exports = transpose;
