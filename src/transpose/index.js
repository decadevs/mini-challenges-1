/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let all = [];
    let arrLen = array.length;
    let len = array[0].length;
    let transposed = []

    for (let j = 0; j < len; j++){
        for (let i = 0; i < arrLen; i++){
            all.push(array[i][j])
        }
        transposed.push(all.splice(0, arrLen))
    }
    return transposed;
}

module.exports = transpose;
