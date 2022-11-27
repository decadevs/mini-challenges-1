/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
 
let bigArray = [];

for(let i = 0; i < array[0].length; i++){
        let innerArray =[];
        for (let j=0;j<array.length;j++){
            innerArray.push(array[j][i])
        }
        bigArray.push(innerArray)
    }
    return bigArray
}

   



module.exports = transpose;
