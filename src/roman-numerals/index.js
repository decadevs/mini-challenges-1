/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
	let total =0;
	let deduct = 0;
	let input = roman.split("");
	let basicRoman={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
for(let i=0;i<input.length;i++){
	total+=basicRoman[input[i]];
	if (basicRoman[input[i]]<basicRoman[input[i+1]]) {
		deduct+=(basicRoman[input[i]]*2);
	}
}
return (total-deduct);

}
module.exports = romanToDecimal;
