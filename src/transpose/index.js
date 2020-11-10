/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
   
    let arrr = []

  for(let i = 0; i < array[0].length ; i++){
    arrr[i] = []
     for(let j = 0; j < array.length ; j++){
         arrr[i][j] = array[j][i]
     }
  }
  return arrr

}

module.exports = transpose;
