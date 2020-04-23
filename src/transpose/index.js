/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let returned = [];
    let arrayLenth = array[0].length;

    for (let i = 0; i < arrayLenth; i++) {
        returned.push([]);
    }

    for (let j = 0; j < returned.length; j++) {
        for (let k = 0; k < array.length; k++) {
            returned[j].push(array[k].shift());
        }
    }

    return returned;
}

module.exports = transpose;
