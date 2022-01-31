/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 //A function that takes one arguement
 function transpose(array) {
   //Create an empty array
    const result  = [];
    //loop through the function array
    for (let i = 0; i < array[0].length; i++) {
      //create an empty array
      const col = [];
     //loop through the function array
      for (let j = 0; j < array.length; j++) {
          col.push(array[j][i]);
      }
    result.push(col);
    }
    return result;
}

module.exports = transpose;
