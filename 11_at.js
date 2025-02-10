// 11. at()
// Signature : Returns values | Input : -ve or +ve 
// Iterate


if(!Array.prototype.myAt){
    Array.prototype.myAt = function(index){
        if(index < 0){
            index = this.length + index
        }
        return this[index];

    }
}

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.myAt(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.myAt(index)}`);
// Expected output: "An index of -2 returns 130"
