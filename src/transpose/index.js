/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
  //initialize and empty array variable to store your answer
  const transposedArray = [];

  //loop through the array to check your conditions
  for (let i = 0; i < array[0].length; i++) {
    //initialize and empty column array varuable to store the columns
    const columns = []
    //loop through the array length and transpose the columns and push to the colunms array
    for (let j = 0; j < array.length; j++) {
      columns.push(array[j][i]);
    }
    //push the colums to the main array(as the)
    transposedArray.push(columns)
  }

  return transposedArray
};

console.log(transpose([[1 , 2, 3], [4, 5, 6],[7, 8, 9]]))
module.exports = transpose;
