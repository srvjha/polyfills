// 10. includes()
// Signature : Returns Boolean Value | Input : searchElement,fromIndex
// Iterate



if(!Array.prototype.myIncludes){
    Array.prototype.myIncludes = function(searchElement,fromIndex=0){
        for(let i = fromIndex;i<this.length;i++){
            if(this[i]=== searchElement){
                return true;
            }
        }
        return false;

    }
}

const array100 = [1, 2, 3];

console.log(array100.myIncludes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.myIncludes('cat'));
// Expected output: true

console.log(pets.myIncludes('at'));