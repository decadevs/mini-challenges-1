/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let newArray = [];
    
    for(let row = 0; row < array.length; row++){
        
        newArray.push([]);
        
        for(let col = 0; col < array[row].length; col++){
            
            newArray[row].push(array[col][row]);
        
        }
    
    }
    return newArray;

}

module.exports = transpose;
