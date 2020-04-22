/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let newArr = [];
  
    for(let i = 0; i < array[0].length; i++){
      newArr.push([]);
    }; 
     
     array.map((arr) => {
       arr.map((val, index) => {
         newArr[index].push(val)
       });
     });
     
     return newArr;
}

module.exports = transpose;
