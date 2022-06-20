/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let newArray = []; //initialize empty array
  for(let i = 0; i < array[0].length; i++){
    newArray.push([]);
    for(let j = 0; j < array.length; j++){
      newArray[i].push(array[j][i]);
    }
  }
  return newArray;
}

module.exports = transpose;
