// 12. indexOf()
// Signature : Returns first element index or -1 if not found | Input : value,fromIndex
// Iterate


if(!Array.prototype.myIndexOf){
    Array.prototype.myIndexOf = function(value,fromIndex = 0){
        let currentArray = this;
        for(let i=fromIndex;i<currentArray.length;i++){
            if(currentArray[i]=== value){
                return i;
            }
        }
       return -1;
    }
}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.myIndexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.myIndexOf('bison', 2));
// Expected output: 4

console.log(beasts.myIndexOf('giraffe'));
// Expected output: -1