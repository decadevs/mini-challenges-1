/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    // find the width and height of the Array
    var wid = array.length || 0;
    var hei = array[0] instanceof Array ? array[0].length : 0;
    //if the Array has zero height and width return empty array
    if (hei ===0 || wid ===0) {
        return [];
    }
    // counter i and j, transposed will be stored in trans
    var i, j, trans=[];
    //Loop throuth every item in the outer array(hei)
    for (i =0; i < hei; i++) {
        //insert a new row
        trans[i] =[];
        //loop through every item per item in outer array (wid)
        for (j = 0; j < wid; j++) {
            //save transposed data
            trans[i][j] = array[j][i];
        }
    }
    return trans;
}

module.exports = transpose;
