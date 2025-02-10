// 8. flatMap()
// Signature : New Array | input (map with flat depth of level 1)

if(!Array.prototype.myFlatMap){
    Array.prototype.myFlatMap = function(userFn){
        const newArray = this.myMap(userFn).myFlat(1);
        return newArray;
    }
}

const ar1 = [1, 2, 1];
const ar2 = [1, 2, 3, 4];

const result = ar1.myFlatMap((num) => (num === 2 ? [2, 2] : 1));
const AnotherResult = ar2.myFlatMap((x) => [x, x * 2]);

console.log(result);
console.log(AnotherResult);