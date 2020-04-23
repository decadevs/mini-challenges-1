/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let char=["(", ")", "[", "]", "{","}"]
let a=[...str]
let a1=a.slice(0,a.length/2)
let a2=a.slice(a.length/2)
let b1=["(","[","{"]
let b2=[")","]","}"]
let c1=[]
let c2=[]
for(var i=0;i<a.length;i++){
if(b1.indexOf(a[i])>-1){
  c1.push(a[i])
}
if(b2.indexOf(a[i])>-1){
  c2.push(a[i])
}
}
console.log(c1)
console.log(c2)
var x=new Set(c1).size
x
var y=new Set(c2).size
y
return c1.length===c2.length&&new Set(c1).size==new Set(c2).size? "valid":"invalid"
}

module.exports = isValid;
