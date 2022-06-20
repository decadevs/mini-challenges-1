/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
let arrOfArr = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
]

function transpose(array) {
   
    const arroutput = [];
    const lenOfRow = array[0].length
    const lenOfCol = array.length

    while (arroutput.length < lenOfRow) {
        arroutput.push([])
    }

    let position = 0
    for (let arrays of arroutput) {
        for (let index = 0; index < lenOfCol; index++){
            arrays.push(array[index][position])
        }
        position++
    }
    return arroutput
}

console.log(transpose(arrOfArr))
module.exports = transpose;
