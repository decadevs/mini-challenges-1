/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  if(!Array.isArray(array)) {
    throw TypeError('You must enter an Array only');
  }
  const transposed = [];
  for(let row = 0; row < array[0].length; row++){
    let transposedRow = [];
    for(let col = 0; col < array.length; col++){
      let [x,y] =  [row,col];
      transposedRow.push(array[y][x]);
    }
    transposed.push(transposedRow);
  }
  return transposed;
}

module.exports = transpose;
