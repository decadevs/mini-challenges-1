/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    var newArray = '';
    var answer = [];
    for (let i = 0; i < array[0].length; i++) {
        for (let j = 0; j < array.length; j++) {
            newArray += array[j][i].toString()+'.';
            
        }
        newArray += '.';
    }
    var arrz = newArray.split('.');
    var arr = [];
    for (let z = 0; z < arrz.length; z++) {
        if (arrz[z] !== '') {
            arr.push(Number(arrz[z]));
        }
        
    }

    for (let k = 0; k < array[0].length; k++) {
        var row = arr.splice(0,array.length);
        answer.push(row)
        
    }
    return answer;
}
module.exports = transpose;

