/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    //given an array A to be size nxm the transposed array B will 
    //have number of row to be A[0].length and number of column to be
    // A.length
    //Having gotten row and column size of array B; 
    //The Transposed array Bji=Aij

    let rowSize=array[0].length
    let matB=new Array(rowSize)

    for(let i = 0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            //set column size for each row of matB
            matB[j]=new Array(array.length)
        }

        for(let x=0;x<array.length;x++){
            for(let y=0;y<array[x].length;y++){
                matB[y][x]=array[x][y]
            }
        }
    }

    return matB



    
}

module.exports = transpose;
