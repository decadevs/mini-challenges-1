/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
        function transpose(array) {let matrix = []
            let rows = array.length
            let columns= array[0].length

                for(let j =0; j< columns; j++){
                matrix[j]= [rows]}

                    for(let i =0; i< rows; i++){
                        for(let j =0; j< columns; j++){
                        matrix[j][i]= array[i][j]}
                    }

        return matrix}


module.exports = transpose;
