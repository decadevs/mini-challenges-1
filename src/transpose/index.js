/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
   let result = []
   for (let i = 0; i < array.length; i++){
    console.log(array[i])
    for(let j = 0; j < array[i].length; j++){
      console.log(array[i][j])
      if(array[i][j] === undefined) continue;
      if(result[j] === undefined) result[j] = []

      result[j][i] = array[i][j]
    }
   }
   return result
}
console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]))

module.exports = transpose;
