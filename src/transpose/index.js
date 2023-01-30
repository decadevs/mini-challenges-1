/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    //Initialized as an empty array.
    let transposed = [];
    //a FOR loop that will iterate i over the length of the
    //first element of array. This is the number of columns in the array.
    for (let i = 0; i < array[0].length; i++){
        //pushing an empty array into transposed, this will be used to store a row of the transposed array.
      transposed.push([]);
      //A nested loop that will iterate j over the length of array, which is the number of rows in the array.
      for (let j = 0; j < array.length; j++){
        //transposed[i].push([j][i]) pushes the value of array[j][i] into transposed[i], effectively transposing the array.
        transposed[i].push(array[j][i]);
      }
    }
    return transposed;
  }

module.exports = transpose;
