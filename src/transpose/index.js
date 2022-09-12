/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

        for(var i = 0; i < array.length; i++){
        var result = [];
        var column = array[0].length;
        
        var row = array.length;
        for(var i = 0; i < column; i++){
        
        var transColumn = [];
        for (var j = 0; j < row; j++){
        
        transColumn.push(array[j][i]);
        }
        
        result.push(transColumn);
        }   
        return result;
        }
        
        }
        

module.exports = transpose;
