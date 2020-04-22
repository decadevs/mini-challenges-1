/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
/**
 * MY ALGORITHM
 * 1. determine the rows and columns of the array
 * 2. determine the length of the new array based on the number of columns
 * 3. add each value of the column based on the row
 * 
 */
function transpose(array) {
    let col = array[0].length
    let row = array.length
    let newArr = []
  
  for(let i = 0; i < col; i++){
    newArr[i] = []
    
    for (let j=0; j < row; j++ ){
      newArr[i][j] = array[j][i]
      
    }
    
  }
  return newArr
}

module.exports = transpose;

console.log(transpose([
    [1, 7, 9],
    [2, 3, 5],
  ]))
