
// 16. shift()
// Signature : Returns  popped value | No Input
// Iterate , removes the first value of  array

if (!Array.prototype.myShift) {
    Array.prototype.myShift = function () {
        

        let shiftedValue = this[0]; 

        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
            console.log(this)
        }

        this.length -= 1; 

        return shiftedValue;
    };
}


const arr = [1,2,3,4,6];
arr.myShift(2);
console.log(arr)
