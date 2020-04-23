/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    var newArray = [].concat(...array);
    var aa = array[0].length;
    var bb = newArray.length;
    var cc = [];
    for (var i = 0; i < aa; i++) {
        var dd = [];
        for(var j = 0; j < bb; j++) {
            if (j % aa == i) {
                dd.push(newArray[j]);
            }
        }
        cc.push(dd);
    }
    return cc;
    }

module.exports = transpose;
