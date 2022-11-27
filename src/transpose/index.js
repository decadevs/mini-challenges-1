/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {

    let newArr = []
    for(let i = 0; i < array[0].length; i++){
        let ar = []
        for (let j = 0; j<array.length; j++){
           ar.push(array[j][i])
       }
            newArr.push(ar)
    }
    return newArr
    }

module.exports = transpose;
