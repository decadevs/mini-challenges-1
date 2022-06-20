/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const result = [];
    
    for(let m = 0; m < array[0].length; m++){
            let newM = [];
            for(let n =0; n < array.length; n++){
                newM.push(array[n][m]);
        
        }
    result.push(newM)
    }
    return result
}
module.exports = transpose;
