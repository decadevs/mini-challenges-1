/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
 let newArray = []
 for(let indexOfM=0; indexOfM < array.length; indexOfM++){
        for(let indexOfN = 0; indexOfN < array[indexOfM].length; indexOfN++){
            
   if(indexOfM === 0){
       newArray.push([]);
   }
    newArray[indexOfN].push(array[indexOfM][indexOfN]);

   }

 }
    return newArray;
}

module.exports = transpose;
