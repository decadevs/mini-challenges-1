/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array){
    let transposedRow= [];
    let transposedArray = [];
  
    for(let i=0; i<array[0].length; i++){
      for(let j=0; j<array.length; j++){
        transposedRow.push(array[j][i]);
      }
       transposedArray.push(transposedRow.splice(0,array.length))
    }return transposedArray;
  }

module.exports = transpose;
