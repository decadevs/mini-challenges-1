/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array, lengthOfNewArry) {
    let emptyArray = [];
    for(let i = 0; i < array[0].length; i++){
       emptyArray.push([]);
        }
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array[0].length; j++){
         emptyArray[j].push(array[i][j])
      }
    }
    return emptyArray
}
module.exports = transpose;
