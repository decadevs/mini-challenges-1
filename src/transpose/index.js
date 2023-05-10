/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
let temparr=[];
let newarr=[];
let arraywidth=0;

array.forEach(x=> {if(x.length>arraywidth){arraywidth=x.length}})

for(let i=0; i< arraywidth; i++){
for(let j=0; j < array.length; j++){
    temparr.push(array[j][i]);
    if(temparr.length / array.length==1){
        newarr.push(temparr);
        temparr=[];
        }
    }
}
return newarr;
}

module.exports = transpose;
