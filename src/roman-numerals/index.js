/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let uncaseRoman = roman.toLowerCase();
    let sum = 0;
    let obj = {
      'i': 1,
      'v': 5,
      'x': 10,
      'l': 50,
      'c': 100,
      'd': 500,
      'm': 1000,
      'iv': 4,
      'ix': 9,
      'xl': 40,
      'xc': 90,
      'cd': 400,
      'cm': 900
    }

    let keys = Object.keys(obj)

    if (uncaseRoman.includes('iv')) {
      sum += obj['iv']
      uncaseRoman = uncaseRoman.replace('iv', '')
    }

    if (uncaseRoman.includes('ix')) {
      sum += obj['ix']
      uncaseRoman = uncaseRoman.replace('ix', '')
    }
    
    if (uncaseRoman.includes('xl')) {
      sum += obj['xl']
      uncaseRoman = uncaseRoman.replace('xl', '')
    }
    
    if (uncaseRoman.includes('xc')) {
      sum += obj['xc']
      uncaseRoman = uncaseRoman.replace('xc', '')
    }
    
    if (uncaseRoman.includes('cd')) {
      sum += obj['cd']
      uncaseRoman = uncaseRoman.replace('cd', '')
    }
    
    if (uncaseRoman.includes('cm')) {
      sum += obj['cm']
      uncaseRoman = uncaseRoman.replace('cm', '')
    }
    

    for (let j = 0; j < uncaseRoman.length; j++) {
      let char = uncaseRoman[j];
      if (keys.includes(char)){
        sum += obj[char]
      }
    }
    return sum
}


module.exports = romanToDecimal;
