/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
//function transpose(array) {}

function transpose(array){
    let rows = []
    let newArr = []
    let i = 0
    while(i<array[0].length){
        for(let j = 0; j<array.length; j++){
            rows.push(array[j][i])
        }
        newArr.push(rows)
        rows = []
        i++    
    }
    return newArr
}

console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]))

module.exports = transpose;
