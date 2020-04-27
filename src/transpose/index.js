/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
	let tLength;
	let m = array.length;
	let n = array[0].length;
	let transposing = [];
	let transposed =[];
	if ((1 <= m <= 10)&&(1 <= n <= 10)) {
   	for(let i=0;i<n;i++){
   		array.forEach(a=>{
   			transposing.push(a[i]);
   		});
   		tLength = transposing.length;
   		while(tLength>0){
   	  	transposed.push(transposing.splice(0,m));
   	  	tLength-=m;
   	  }
   	 
   	  }
     }
   return transposed
   }


module.exports = transpose;
