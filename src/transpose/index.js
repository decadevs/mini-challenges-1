/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */




function transpose(array) {
 const rowLength = array.length; //gets length of row
 const columnLength = array[0].length; //gets length of column
 const resultArray = [];


 for(let i = 0; i< rowLength; i++){
   for(let j = 0; j < columnLength; j++){
    if(!resultArray[j]){ //check if column exist
      resultArray[j] = []; //initial stack remains empty
    }
    resultArray[j][i] = array[i][j]; //swap the resultant row for column and vice versa

  }
 }
 return resultArray;
}

module.exports = transpose;
