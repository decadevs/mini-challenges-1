/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let lenRow = array[0].length;
    let lenCol = array.length;

    const mainArray = [];
    for (let row = 0; row < lenRow; row++) {
        // The main loop that runs in lenRow times
        let innerArray = []
        for (let col = 0; col < lenCol; col++) {
            // The inner loop that runs in lenCol times
            innerArray.push(array[col][row])
        }
        mainArray.push(innerArray)
    }
    return mainArray
}

module.exports = transpose;
