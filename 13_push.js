// 13. push()
// Signature : Returns length of modified array | Input : values
// Iterate , add to the last to the array


if(!Array.prototype.myPush){
    Array.prototype.myPush = function(...rest){
     for(let i = 0;i<rest.length;i++){
        this[this.length] = rest[i];
     }
     return this.length;
    }
}

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.myPush('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.myPush('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
