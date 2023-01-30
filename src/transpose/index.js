/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
    function transpose(array) {
    let finalArray = [];
    for (let i = 0; i < array[0].length; i++) {
        let newArr = [];

        for (let j = 0; j < array.length; j++) {
        newArr.push(array[j][i]);
        }

        finalArray.push(newArr);
    }
    return finalArray;
    }

module.exports = transpose;
