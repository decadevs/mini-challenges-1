/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    let result = []
    for (let i = 0; i < array[0].length; i++) {

        let row = []

        for (let j = 0; j < array.length; j++) {
            let item = array[j]
            row.push(item[i])

        }
        result.push(row)
    }
    return result;
}

module.exports = transpose;
