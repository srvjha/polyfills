// 5. find()
// Signature : Return the first element matching the condition | input: userFn
// iterate, gives value

if(!Array.prototype.customFind){
    Array.prototype.customFind = function(userFn){
        let currentArray = this;
        for(let i = 0;i<currentArray.length;i++){
            if(userFn(currentArray[i])){
                return currentArray[i];
            }
        }
    }
}

const array2 = [5, 100,12,50,124];

console.log("------ Predefined find method ------")
const found = array2.find((element) => element > 10);
console.log(found);
console.log("------ Custom defined find method ------")
const found1 = array2.customFind((element) => element > 10);
console.log(found1);