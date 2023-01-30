/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let newArray = [];
  //loop through the matrix and push empty arrays into newArray
    for(let i = 0; i < array[0].length; i++){
        newArray.push([]);
// loop and push items into the empty arrays in the newArray
        for(let j = 0; j < array.length; j++){
            newArray[i].push(array[j][i]);
        };
    }return newArray;
}


module.exports = transpose;
