/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
let char=["(", ")", "[", "]", "{","}"]
let a=[...str]
let b1=["(","[","{"]
let b2=[")","]","}"]
let c1=[]
let c2=[]
let u=[]
for(var i=0;i<a.length;i++){
if(b1.indexOf(a[i])>-1){
  c1.push(a[i])
}
if(b2.indexOf(a[i])>-1){
  c2.push(a[i])
}
if(char.indexOf(a[i])%2==0){
    let p1=i
    let p2=a[i+2]
    let p3=a[i+1]
    if(p2==char[char.indexOf(a[i])+1]&&p3!=char[char.indexOf(a[i])+1]&&p3!==a[i]){
      u.push("yes")
    }
  }
}
var y1=[]
var y2=[]
var y3=[]
for(var i=0;i<c1.length;i++){
  if(c1[i]==b1[0]){
    y1.push(c1[i])
  }
  else if(c1[i]==b1[1]){
    y2.push(c1[i])
  }
  else if(c1[i]==b1[2]){
    y3.push(c1[i])
  }
   if(c2[i]==b2[0]){
    y1.push(c2[i])
  }
  else if(c2[i]==b2[1]){
    y2.push(c2[i])
  }
  else if(c2[i]==b2[2]){
    y3.push(c2[i])
  }
}

if(c1.length===c2.length&&new Set(c1).size==new Set(c2).size&&y1.length%2==0&&y2.length%2==0&&y3.length%2==0&&u.length==0){
  return  "valid"
}
else {
    return "invalid"
} 
}

module.exports = isValid;
