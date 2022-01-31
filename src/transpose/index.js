/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const hold =[];
    for (let a = 0; a < array[0].length; a++) {
        const column = [];
        for (let b = 0; b < array.length; b++) {
            column.push(array[b][a]);
        }
        hold.push(column);
    }
    return hold;
}

module.exports = transpose;
