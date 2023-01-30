/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let newArr = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
        newArr.push(array[i][j])
        
    }
    
  }
return newArr
}

let a = [
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ]


  console.log(transpose(a))

module.exports = transpose;
