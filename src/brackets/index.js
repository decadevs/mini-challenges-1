/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
	let leftBracket = 0, rightBracket = 0, leftBrace = 0, rightBrace = 0, leftCurl = 0, rightCurl = 0;

  	for(let i = 0; i < str.length; i++){
	    if(str[i] === '('){
	      leftBracket++;
	    }else if(str[i] === ')'){
	      rightBracket++;
	    }else if(str[i] === '['){
	      leftBrace++;
	    }else if(str[i] === ']'){
	      rightBrace++;
	    }else if(str[i] === '{'){
	      leftCurl++;
	    }else if(str[i] === '}'){
	      rightCurl++;
	    }
	}
	  
	if(leftBracket === rightBracket && leftBrace === rightBrace && leftCurl === rightCurl && str === ''){
		return 'valid';
	}else{
		return 'invalid';
	}
}

module.exports = isValid;