/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

let matrix = [
    
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  
]
 


function transpose(array) {
    let parentArr = []; 
    let row = array[0].length
    let col = array.length;

    console.log(row);
    console.log(col);

    while (parentArr.length < row) {
        parentArr.push([])
    }

    let counter = 0;
    for (let arr of parentArr) {
        for (let i = 0; i < col; i++) {
            arr.push(array[i][counter])
        }
        counter++
    }
    return parentArr
    

    }



console.log(transpose(matrix));


module.exports = transpose;
