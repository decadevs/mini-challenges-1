/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let sub_Array = [];
    let new_Array =[];
for (let i = 0; i < array[0].length; i++){


    for(let j = 0; j < array.length; j++){
        sub_Array.push(array[j][i]);

    }
    new_Array.push(sub_Array);
}

    return(new_Array);
}


module.exports = transpose;
