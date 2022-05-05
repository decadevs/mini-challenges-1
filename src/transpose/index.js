/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let row = array[0].length
    for (let j = 0; j < row; j++) {
        let temp = []
        for (let i = 0; i < array.length; i++) {
            temp.push([i][j])

        }
        output.push(temp)
    }
    return output;
}

module.exports = transpose;

