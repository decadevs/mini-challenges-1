/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let arr, temp;
  let myResult =[];
  let elem = array[0].length;
  let arrays = array.length;
  for(let i = 0; i < elem; i++){
    arr = [];
    for(let j = 0; j < arrays; j++){
      temp = array[j][i];
      arr.push(temp)
    }
    myResult.push(arr)
  }
  return myResult
}
console.log(transpose([[1,2,3,4],[3,4,5,6]]));
module.exports = transpose;
