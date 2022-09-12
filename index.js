let mymap= {

I : 1,

V : 5,

X : 10,

L : 50,

C : 100,

D : 500,

M : 1000
}

let condition = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
}
let modify

const checkerFun  = (input) => {
let stringArray = input.split('');

let sectionToSum = [];
let inputLength= input.length;

for (let i=0;i<inputLength;i+=3){
    
    
    
if(inputLength>0){ 

    let chunk = stringArray.splice(-i ,i);
    i+1
    sectionToSum.push(chunk)
    console.log(sectionToSum)
    console.log('cureent lent is ',stringArray.length)
}else{ 
    
    sectionToSum.push(stringArray)

}

}
 g = sectionToSum.map(data=>data.join(''))
 console.log(g)
 let fil = g.filter(f=>f!='')
 let ra =fil.map(data=>{
    if(data=='IV'){
        return condition['IV']
    }else if(data=='IX'){
        return condition['IX']
    }else if(data =='XL'){
        return condition['XL']
    }else if (data=='CM'){
        return condition['CM']
    }else if(data == 'CD'){
        return condition['CD']
    }else{
        return mymap[data]
    }
 })
 return ra.reduce(((a,b)=>(0,a+b)))
}


// console.log(getSections('LIV'))

console.log(checkerFun('MMMDCCXXIV'))


