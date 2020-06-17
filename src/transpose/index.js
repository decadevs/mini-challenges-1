/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  // set arrayLength to the length of the first array to accomadate for complete transpose of the matrix
  let arrLength = array[0].length;
  let newArr = [];

  for(let i=0; i < arrLength; i++){
    // pass empty arrays into the the newArr variable which will accomadate the transposed matrix
    newArr.push([]); newArr
  }

  for (let i = 0; i < arrLength; i++) {
    for(let j=0; j < array.length; j++){
      // loop through each arrow row distributing the values represented by j into each array cell in newArr
      newArr[i].push(array[j][i])
    } 
  }
  return newArr
}

console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]));


module.exports = transpose;
