// Array Methods

// 1. .map()

// Signature : New Array return | input - userFn
// iterate, index aur value hota hai userFn mein
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userfn){
        const newArray = [];
        const currentArray = this // yeh jis context mein hota usko point krta hai
        for(let i = 0;i<currentArray.length;i++){
           newArray.push(userfn(currentArray[i],i));
        }
        return newArray;
    }
}

const testMap = [1,4,5,6,7];
const giveMultiples  = testMap.myMap((e)=>e*2);
console.log("Custom Map: ",giveMultiples)
