/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let copyArr = [];
    for (let y in array[0]) {
        copyArr[y] = [];
    }

    for (let r in array) {
        array[r].forEach((element, index) => {
            copyArr[index].push(element);
        });
    }
    return copyArr;
}
module.exports = transpose;
