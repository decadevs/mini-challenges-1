/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let newArr1 = []
    for(let i = 0; i<array[0].length; i++){
        let newArr2 = []
        for(let j = 0; j < array.length; j++){
            let element = array[j][i]
            newArr2.push(element)
        }
        newArr1.push(newArr2)
    }
    return newArr1
}

module.exports = transpose;
