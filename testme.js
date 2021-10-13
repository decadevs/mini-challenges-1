let store=[]

let array=[
    [5,12,17,9,3],
    [13,4,8,14,1],
    [9,6,3,7,21]
]

for (let i = 0; i < array[0].length; i++) {
    store.push([])
    
}

for (let i = 0; i < 5; i++) {
    for (let x = 0; x < 3; x++) {
    store[i].push(array[x][i])        
    console.log(array[x][i])        
}
console.log(store)        
    
}