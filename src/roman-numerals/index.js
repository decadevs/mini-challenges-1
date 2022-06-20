/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */


function romanToDecimal(roman) {
    let Roman = roman.toUpperCase();
    var num =0
    var i =0 
    let key= [];
    let romanNumeral = [{I:1,V:5,X:10,L:50,C:100,D:500,M:1000,IV:4,IX:9,XL:40,XC:90,CD:400,CM:900}]
    
    while(i<Roman.length){
        
        romanNumeral.forEach(element => {
            key = Object.keys(element);
       });
         // check if the length of roman is up to two then check if the two substring is in key
        if((i+1 < Roman.length) && (key.includes(Roman.substring(i,i+2)))){
            
            num = num + romanNumeral[0][Roman.substring(i,i+2)]
            
            i+=2;
        }
        else{
            
            num = num + romanNumeral[0][Roman.substring(i,i+1)]
            i+=1
        }
    }
    return num;
}
module.exports = romanToDecimal; 
console.log(romanToDecimal("MCMXLIV"))
 





// let roman = "MCMXLIV" 
// let s = roman.toUpperCase();
// var num =0
// var i =0 
// romanNumeral = [{I:1,V:5,X:10,L:50,C:100,D:500,D:1000,IV:4,IX:9,XL:40,XC:90,CD:400,CM:900}]
// let key= [];
// while(i<s.length){

//     romanNumeral.forEach(element => {
//         key = Object.keys(element);
//    });
//         // 
//     if((i+1 < s.length) && (key.includes(s.substring(i,i+2)))){
       
//         num = num + romanNumeral[0][s.substring(i,i+2)]
        
//         i+=2;
//     }
//     else{
        
//         num = num + romanNumeral[0][s.substring(i,i+1)]
//         i+=1
//     }
// }
// console.log(num)

