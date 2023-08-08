/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let newArr = []
    for(let i in array[0]){
        newArr.push(Array(array.lenth))
    }
    for(let i in array){
        for(let j in array[i]{
            newArr[j][i] = array[i][j]
        }
    }
    return newArr
}

module.exports = transpose;
