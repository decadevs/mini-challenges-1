/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

let transpose = [];
for(i = 0; i < array[0].length; i++){
  let rows = [];  //rows of the transposed array
  for (j = 0; j < array.length; j++){
    rows.push(array[j][i]);
  }
  transpose.push(rows);
} 

   return transpose;
}

module.exports = transpose;
