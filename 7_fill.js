
// 9. fill()
// Signature : Modidfied Array | input: value,startIndex,endIndex
// Iterate

if(!Array.prototype.myFill){
    Array.prototype.myFill = function(value,start=0,end=this.length){
        for(let i = start;i<end;i++){
            this[i] = value;
        }
        return this

    }
}


const array10 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array10.myFill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array10.myFill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array10.myFill(6));
// Expected output: Array [6, 6, 6, 6]

console.log(array10)