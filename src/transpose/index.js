/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

/* We create an empty array stored in variable name major
/* loop through with index of colums called [i]  and nested loop to run index of rows called[j]
/* push the value of the of the array at [j][i]*/
function transpose(array){
    
    let major=[];
        for(let i = 0; i<array[0].length; i++){
            major.push([])
        
    
        for (let j=0; j<array.length; j++) {
             major[i].push(array[j][i])
        }
    }
    return major;
    }
    
     module.exports=transpose;
    