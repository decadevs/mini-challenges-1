/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const outputArray = [];
    const rowLength = array.length;
    const columnLength = array[0].length;

    if (rowLength >= 1 && rowLength <= 10 && columnLength >= 1 && columnLength <= 10) {

        while (outputArray.length < columnLength) {
            outputArray.push([]);
        }
    
        let innerIndex = 0;
    
        for (let arr of outputArray) {
            
            for (let i = 0; i < rowLength; i++) {
                arr.push(array[i][innerIndex]);
            }

            innerIndex += 1;

        }

    } else {
        return 'Invalid input';
    }

    return outputArray
}

module.exports = transpose;
