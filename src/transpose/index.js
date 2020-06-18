/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let newArray = [];

    for(let row = 0; row < array.length; ++row){
        for(let col = 0; col <array[i].length; ++col){

            if(array[row][col] === undefined) continue;

            if(newArray[col] === undefined) newArray[col] = [];
            
            newArray[col][row] = array[row][col];
        }
    }

    return newArray;

}

module.exports = transpose