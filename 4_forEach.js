// 4. forEach()
// Signature : No Return | input : userFn
// iterate

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        let currentArray = this;
        for(let i=0;i<currentArray.length;i++){
            userFn(currentArray[i],i)
        }
    }
}

const scores = [100,14,86,34,56];
console.log("------ Predefined forEach method ------")
scores.forEach((score)=>console.log(score>50));
console.log("------ Custom defined forEach method ------")
scores.myForEach((score)=>console.log(score>50))
