/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
const arr = [[4,6,5],[7,1,9]];

function transpose(array) {
  const col = array[0].length;
  const row = array.length;
  let newArr = [];
  for (let i = 0; i < col; i++) {
    newArr.push([]);
    for (let j = 0; j < row; j++) {
      newArr[i].push(array[j][i]);
    }
  }
  return newArr;
}

console.log(transpose(arr));


module.exports = transpose;
