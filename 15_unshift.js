// 15. unshift()
// Signature : Returns length of modified array | Input : values
// Iterate , add elements ar the start of array


if(!Array.prototype.myUnshift){
    Array.prototype.myUnshift = function(...rest){
    let totalLength = this.length + rest.length;
    let currentArray = this.length - 1;
    
    for(let i = totalLength - 1 ;i>=0;i--){
        this[i] = this[currentArray--]
    }

    for(let i = 0;i<rest.length;i++){
        this[i] = rest[i]
    }
    console.log(this)
     return this.length;
    }
}

const arr = [1,2,3,4,6];
arr.myUnshift(2);
console.log(arr.myUnshift(4, 5));
// Expected output: 5

console.log(arr);
// Expected output: Array [4, 5, 1, 2, 3]

