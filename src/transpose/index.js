/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let newArray = [];

  if (array.length < 10) {
    for (let each of array) {
      // Creating empty arrays for each index
      while (each.length < 10 && each.length != newArray.length) {
        newArray.push([]);
      }

      // Pushing the number into the previously created arrays
      for (let num in each) {
        newArray[num].push(each[num]);
      }
    }
  }

  return newArray;
}

module.exports = transpose;
