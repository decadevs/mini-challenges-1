/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
let arr= str.split("");
let openings=[];
if((arr.includes("(") == false && arr.includes("[")==false &&
 arr.includes("{")==false))
{
return "invalid";
}
else{
	for(let i = 0;i<arr.length; i++){
		if(arr[i]=="("||arr[i]=="["||arr[i]=="{"){
           openings.push(arr[i]);

	}else if(arr[i]==")"||arr[i]=="]"||arr[i]=="}"){
          if((arr[i]==")"&&openings[openings.length-1]=="(")||
          	(arr[i]=="]"&&openings[openings.length-1]=="[")||
          	(arr[i]=="}"&&openings[openings.length-1]=="{")){
          	openings.pop();
          }
	}
	}
	if(openings.length===0){
		return "valid";
	}{
		return "invalid";
	}
 }
}
module.exports = isValid;