// 6. some()
// Signature : Returns true if atleast one element in the array passes the test conditon

if(!Array.prototype.mySome){
    Array.prototype.mySome = function(userFn){
        let currentArray = this;
       
        for(let i=0;i<currentArray.length;i++){
            if(userFn(currentArray[i],i)){
                return true;
            }
        }
        return false;
    }

}

const array = [1, 2, 3, 4, 5];

console.log("------ Predefined some method ------")
const even = (element) => element % 2 === 0;
console.log(array.some(even));
console.log("------ Custom defined some method ------")
const even1 = (element) => element % 2 === 0;
console.log(array.mySome(even));