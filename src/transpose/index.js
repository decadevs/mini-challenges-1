/**
 * Implement the solution in this function
 *
 * @param {number[1,2,3]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let store=[]
    for (let i = 0; i < array[0].length; i++) {
        store.push([])
    }
    for (let i = 0; i < array[0].length; i++) {
        for (let x = 0; x < array.length; x++) {
            store[i].push(array[x][i])   
            // console.log(`${array[x][i]} arrayposition=[${x}][${i}]`);     
        }
    
}

    // console.log(`chi answer ${store}`)
    return store
}

module.exports = transpose;
