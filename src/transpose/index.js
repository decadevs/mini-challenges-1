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

console.log(transpose([
  [5, 13, 9],
  [12, 4, 6],
  [17, 8, 3],
  [9, 14, 7],
  [3, 1, 21],
]))
console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]))
module.exports = transpose;
