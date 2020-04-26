/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  var result = [];
    var result1 = [];

    function start(){
        result = array.map(myFunction);
        function myFunction(value, index, array) {
            return value.shift();
        }
        return result;
    }
    do {
        result1.push(start());
        result=[];
     }while(array[0].length>0)
    return result1;
}

module.exports = transpose;
