/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  var newArray = [];

  if (array.length < 10) {
    // Creating empty arrays for each index
    for (let each of array) {
      while (each.length < 10 && each.length != newArray.length) {
        newArray.push([]);
      }
    }

    // Pushing the number into the previously created arrays
    for (let each of array) {
      for (let num in each) {
        newArray[num].push(each[num]);
      }
    }
  }

  return newArray;
}

module.exports = transpose;
