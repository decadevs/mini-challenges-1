/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result = []

    // Loop through the column using row length
    // Intialise empty array for each loop to update result.
    for (let i = 0; i < array[0].length; i++) {
        let hold = []
        // Loop through the row using column length
        for (let j = 0; j < array.length; j++) {        
            hold.push(array[j][i])
        }
        result.push(hold)
    }

    return result
}

module.exports = transpose;
