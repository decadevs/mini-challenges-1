/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
let conversion= roman.toLowerCase();
let sum=0;
let i=0;


const list= {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,

}
while(i<conversion.length){
let first=conversion[i];
let second= conversion[i+1];

if(list[first]<list[second]){
  sum+= list[second]-list[first]
  i+=2
}
else{
sum += list[first]
i++
}

}

return sum;



}
console.log(romanToDecimal('xl'))
module.exports = romanToDecimal;
