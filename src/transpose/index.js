/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let emptyArray = [];
  for(let m = 0; m < array[0].length; m++){
     emptyArray.push([]);
      }
  for(let m = 0; m < array.length; m++){
    for(let n = 0; n < array[0].length; n++){
       emptyArray[n].push(array[m][n])
    }
  }
  return emptyArray
}
module.exports = transpose;
