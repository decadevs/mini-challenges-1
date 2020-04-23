/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let ans = []
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (i == 0) {
        ans.push([array[i][j]])
        console.log(ans)
      }else{
        ans[j][i] = array[i][j]
      }
    }
  }
  return ans;
}


module.exports = transpose;
