/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let newArr = []
    let length = ''
    let length2 = ''
  for (let i = 0; i < array.length; i++) {
    length = array[i]
    for (let j = 0; j < array[i].length ; j++) {
      length2 = array[j]
        newArr.push(length2[i])
        
    }
    
  }
  let size = length.length; let arrayOfArrays = [];
for (var k=0; k<newArr.length; k+=size) {
     arrayOfArrays.push(newArr.slice(k,k+size));
}

return arrayOfArrays
}

let a = [
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ]


  console.log(transpose(a))

module.exports = transpose;
