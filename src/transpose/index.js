/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let newArray = [], newArrayLength = array[0].length
    let arrayLength = array.length
    let elementIndex = 0

    while (newArray.length < newArrayLength) {
        let temp = []
        for (let index = 0; index < arrayLength; index++) {
            temp.push(array[index][elementIndex])
        }
        newArray.push(temp)
        ++elementIndex
    }
    return newArray
}
module.exports = transpose;