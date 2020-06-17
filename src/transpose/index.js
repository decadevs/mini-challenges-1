/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let arrLength = array[0].length;
  let newArr = [];

  for(let i=0; i < arrLength; i++){
    newArr.push([]); newArr
  }

  for (let i = 0; i < arrLength; i++) {
    for(let j=0; j < array.length; j++){
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
