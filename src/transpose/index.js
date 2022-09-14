/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposed = []
    for(let i = 0; i < array[0].length; i++){
        transposed.push([])
    }
    
    for(let r = 0; r < array.length; r++){
        for(let c = 0; c < array[0].length; c++){
            transposed[c][r] = array[r][c]
        }
    }
    return transposed
}

module.exports = transpose;
