/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

function transpose(array) {
    let newArray = [];
    let rows = array.length;
   
    let cols = array[0].length
    
    for(let i = 0;i<cols;i++){
        newArray[i] = [];
       // console.log(newArray);
        for(let j = 0;j<rows;j++){
            newArray[i][j] = array[j][i]
        }
    }
    console.log(cols);
    return newArray;
   
}

module.exports = transpose;
