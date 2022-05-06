/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
const arr = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21]
  ];

  console.log(transpose(arr));
function transpose(array) {
    let arr_height = array.length;
    let arr_width = array[0].length;
    let Arr_trans = [];
    //for each column collate upto width;
    //collate all elements on each row upto the height length;
    //append to the trans-array
    for(let i = 0; i < arr_width; i++){
        let arr = [];
        //At instance column; collate each row's element 
        for(let j = 0; j < arr_height; j++){
            arr.push(array[j][i]); 
        }
        Arr_trans.push(arr);
    }
    return Arr_trans;
}

module.exports = transpose;
