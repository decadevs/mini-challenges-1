/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    if(array.length  === 0){
        return [];
    }
    let w = array[0].length; 
    let h = array.length
    let result = [];
    for(let i = 0; i < w; i++){
        result[i] = [];
        for(let j = 0; j < h; j++){
            result[i][j] = array[j][i]
        }
    }
    return result
}

module.exports = transpose;
