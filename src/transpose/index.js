/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let newarr = []
    for(let i = 0; i < array[0].length; i++) {
        let innerarr = []
        for(let j = 0; j < array.length; j++){
innerarr.push(array[j][i])
        }
        newarr.push(innerarr)
    }
    return newarr
}

module.exports = transpose;
