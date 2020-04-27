/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let arrayTrans = [];


    for (let index = 0; index < array[0].length; index++) {
       
        arrayTrans[index] =[];
        
    }

        for (let a = 0; a < array.length; a++) {
            
           for (let b = 0; b < array[a].length; b++) {
               
            

               arrayTrans[b].push(array[a][b]);

           }

            
        }

        return arrayTrans;






}

module.exports = transpose;
