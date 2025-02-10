// 3. .filter()
// Real Signature : New Array | input - userFn
// if true then include

if (!Array.prototype.myfilter) {
    Array.prototype.myfilter = function (callback) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i)) {
                result.push(this[i])
            }
        }
        return result;
    }
}

const arr = [1, 2, 3, 4, 5];
const newArray = arr.myfilter((e) => e % 2 === 0);
// const newArray1 = arr.filter((e)=>e2);
// console.log(newArray1)
console.log(newArray);