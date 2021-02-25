/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const rows = array.length;
    const cols = array[0].length;
    const rowsT = cols;
    const colsT = rows;

    const transp = Array(rowsT).fill(0).map(x => Array(colsT).fill(0));
    transp.forEach((x, i) => x.forEach((x2, i2) => transp[i][i2] = array[i2][i]));
     return transp
}

module.exports = transpose;

