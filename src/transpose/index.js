/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(arr) {
    let trans = []
    if(arr[0].length<=10 && arr.length>=1){
        for(let i = 0; i<arr[0].length;i++){

            let row = []
        
             for(let j =0;j<arr.length;j++){
                 let item = arr[j]  // take the whole first array
                 row.push(item[i]) // take the first value and push to a row
        
            }
            trans.push(row)
        }
        return trans
    }
    
}

module.exports = transpose;

console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]))