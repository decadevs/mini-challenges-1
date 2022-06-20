/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
let answer =[];
 for(let i=0; i<array[0].length; i++){
    answer.push([]);

    for(let j=0; j<array.length; j++){
      answer[i].push(array[j][i])
    }

 }



 return answer;


}

module.exports = transpose;
