/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let rows = array.length;
    let cols = array[0].length;
    let transpose = [];
for ( i = 0; i<cols; i++){
      transpose[i] = [];
     }

for(j = 0; j < rows; j++){
  for(i = 0; i < cols; i++){
    transpose[i][j] = array[j][i];
  }
}
   return transpose;
}

module.exports = transpose;
