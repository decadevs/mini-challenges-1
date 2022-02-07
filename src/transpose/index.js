/**
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array

  FORMAT: console.log(arr[row][col])
  console.log(arr[1][3]) // = 14
  console.log(arr[0][2]) // = 17

  get no of rows, cols
  looping through entire elements count, flip rows and cols
  arr[1][3] → arr[3][1]
  arr[0][2] → arr[2][0]
 */

function transpose(array) {
  let transArr = []
  for (let i=0; i<array[0].length; i++) {
      transArr.push([])
  }

  for (let i=0; i<transArr.length; i++) {
      for (let j=0; j<array.length; j++) {
          transArr[i].push(array[j][i])
      }
  }

  return transArr
}

module.exports = transpose;
