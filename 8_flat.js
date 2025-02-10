// 7. flat()
// Signature : New Array | input (depth)
// iterates for nesting of array to flat it out

if(!Array.prototype.myFlat){
    Array.prototype.myFlat = function(depth){
        let currentArray = this;
        if(typeof depth === "undefined") depth = 1;
        let newArray = [];
        for(let i=0;i<currentArray.length;i++){
            if(Array.isArray(currentArray[i]) && depth>0){
                newArray.push(...currentArray[i].myFlat(depth - 1))
            }
            else newArray.push(currentArray[i])
        }
        return newArray;
    }
}

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.myFlat(Infinity));
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.myFlat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.myFlat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.myFlat(Infinity));
// // expected output: Array [0, 1, 2, 3, 4, 5]

console.log(arr1)

