/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const result = []
for(let i = 0; i < array[0].length;i++){
    const col = [];
for(let j = 0; j < array.length;j++){
    col.push(array[j][i]);
   } 
result.push(col);  
 }
return result;
};

module.exports = transpose;
