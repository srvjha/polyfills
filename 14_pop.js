
// 14. pop()
// Signature : Returns popped value | No Input
// Iterate , removes the last value of  array


if(!Array.prototype.myPop){
    Array.prototype.myPop = function(){
         let poppedValue = this[this.length]
        this[this.length] = this[this.length - 1];
     
     return poppedValue;
    }
}

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
