/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let finalArr = [] // Array for storing the transposed arrays
  for (let index = 0; index < array[0].length; index++) { // Iterate through one of the arrays inside the given array
    finalArr.push([]) // Push an empty array as many times as the number of elements in each of the inner arrays into the finalArr array
  }
  for (let outer = 0; outer < array.length; outer++) { // Iterate through the {array} array
    for (let inner = 0; inner < array[outer].length; inner++) { // Iterate through the arrays inside the {array} array
      finalArr[inner].push(array[outer][inner]) // push the elements of the inner arrays into the empty arrays in the {finalArr} array in order of increasing index
    }
  }
  return finalArr
}

module.exports = transpose;
