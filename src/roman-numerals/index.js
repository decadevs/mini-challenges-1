/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
    
// 


function value(r) 
{
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}
function romanToDecimal(roman) 
{
    var res = 0;
  
     for (i = 0; i < roman.length; i++) 
     {
         var s1 = value(roman.charAt(i));
  
         
         if (i + 1 < roman.length) 
         {
             var s2 = value(roman.charAt(i + 1));

             if (s1 >= s2) 
             {
        
                 res = res + s1;
             } 
             else 
             {
                 res = res + s2 - s1;
                 i++;
             }
         } 
         else  
         {
             res = res + s1;
         }
     }
     return res;
}
console.log(romanToDecimal("MMMCMXCIX"))
module.exports = romanToDecimal;
