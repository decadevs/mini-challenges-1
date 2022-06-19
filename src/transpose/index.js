/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */




function transpose(array) {
 const rowLength = array.length;
 const columnLength = array[0].length;
 const resultArray = [];


 for(let i = 0; i< rowLength; i++){
   for(let j = 0; j < columnLength; j++){
    if(!resultArray[j]){
      resultArray[j] = [];
    }
    resultArray[j][i] = array[i][j];

  }
 }
 return resultArray;
}

module.exports = transpose;
