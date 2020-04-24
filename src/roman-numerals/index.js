/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
/*
function romanToDecimal(num) {
    
    if(num < 1){ return "";}
    if(num >= 1000){return "M" + convert(num - 1000);}
    if(num >= 500){return "D" + convert(num - 500);}
    if(num >= 400){return "CM" + convert(num - 400);}
    if(num >= 100){return "C" + convert(num - 100);}
    if(num >= 90){return "XC" + convert(num - 90);}
    if(num >= 50){return "L" + convert(num -50);}
    if(num >= 40){ return "XL" + convert(num - 40);}
    if(num >= 10){ return "X" + convert(num - 10);}        if(num >= 9){ return "IX" + convert(num - 9);}
    if(num >= 5){ return "V" + convert(num - 5);}
    if(num >= 4){ return "IV" + convert(num - 4);}
    if(num >= 1){ return "I" + convert(num - 1);}  
      
              
}
console.log(romanToDecimal(num))
*/
/*
function romanToDecimal(roman) {
    while (roman >= 1000) {
        roman -= 1000;
        return "M"
    }
    while (roman >= 500) {
        roman -=500;
        return "D";
    
    }
    while (roman >= 400) {
        
        roman -= 400;
        return "CM";

    }
    while (roman >=100) {
        roman -= 100;
        return "C";
    }
    while (roman >= 90) {
        roman -= 90;
        return "XC";
    }
    while (roman >= 50) {
        roman -= 50;
        return "L"
    }
    while (roman >= 40) {
        roman -= 40;
        return "XL"
    }
    while (roman >= 10) {
        roman -=10;
        return "X";
    }
    while (roman >= 5) {
        roman -=5;
        return "V";
    }
    while (roman >= 4) {
        roman -= 4;
        return "IV"
    }
    while (roman >= 1) {
        roman -= 1;
        return "I";
    }
}
*/
/*Why I have a long code was because I  was thinking
it was Integer to Roman Numerals
*/
const myMap=new Map();
myMap.set('I', 1);
myMap.set('V', 5);
myMap.set('X', 10);
myMap.set('L', 50);
myMap.set('C', 100);
myMap.set('D', 500);
myMap.set('M', 1000);

var romanToDecimal= function(s) {
   var result=0;
   if(s){
     var s1=s.split('');
     s1.forEach(function(e,i){
          result += myMap.get(e) < myMap.get(s1[i+1]) ? -myMap.get(e) : myMap.get(e);  // used ternary oprator with '-' where required
     });
   }
   return result; 
}
module.exports = romanToDecimal;
