/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

 function transpose(array) {
  let rows = array.length;
  let columns = array[0].length;
  let number = [];

  for(let i = 0; i < columns; i++){
    number[i] = Array(rows);
  }


  for (let j = 0; j < rows; j++){
    for(let k = 0; k < columns; k++){
      number[k][j] = array[j][k]
    }
  }


  return number

}

module.exports = transpose

// [5, 13, 9]
// [12, 4, 6]
// [17, 8, 3]
// [9, 14, 7,]
// [3, 1, 21]
// newGrid[0][0] = arr[0][0, 5]
// newGrid[1][0] = arr[0][1], 12
// newGrid[2][0] = arr[0][2], 17
// newGrid[3][0] = arr[0][3], 9
// newGrid[4][0] = arr[0][4], 3
// newGrid[0][1] = arr[1][0], 13
// newGrid[1][1] = arr[1][2], 4
// newGrid[2][1] = arr[1][2], 8
// newGrid[3][1] = arr[1][3], 14
// newGrid[4][1] = arr[1][4], 1
// newGrid[0][2] = arr[2][0], 9
// newGrid[1][2] = arr[2][1], 6
// newGrid[2][2] = arr[2][2], 3
// newGrid[3][2] = arr[2][3], 7
// newGrid[4][1] = arr[1][4], 21
