/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  //keep track of the row and column length
  //create outer array, initialize inner array
  let colLength = array[0].length;
  let rowLength = array.length;
  let innerArr;
  let outerArr = [];

  //loop through the array n (column length) times, create an array at each iteration
  for (let i = 0; i < colLength; i++){
    innerArr = [];
    //loop through the array n (row length) times, store array[j][i] to inner array
      for (let j = 0; j < rowLength; j++){
          innerArr.push(array[j][i]);
      }
    //store each inner array in outer array
    outerArr.push(innerArr);
  }
  return outerArr;
}

module.exports = transpose;
