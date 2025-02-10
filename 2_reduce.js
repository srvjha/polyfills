// 2. .reduce()

// Signature : Returns Value | Input :- userfn,intialvalue(optional)
// iterate , if intialvalue not given then will take the first index as intial value 

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(userFn,initalValue){
        let currentArray = this;
        let defaultAccumalator;
        if(typeof initalValue === "undefined"){
            defaultAccumalator = currentArray[0];
        }else{
            defaultAccumalator = userFn(initalValue ,currentArray[0]); // or we can use startindex by putting 0 and 1 based on avaiablity of initial value
        }
        let value;
        for(let i = 1 ;i<currentArray.length;i++){
            console.log("acc: ",defaultAccumalator)
            defaultAccumalator = userFn(defaultAccumalator,currentArray[i])
           
        }
        value = defaultAccumalator;
        return value;
    }
}
const array1 = [1,4,5,6,7];


const sumUs = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const sumUs1 = array1.myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

console.log("Predefined Reduce method: ",sumUs);
console.log("Custom Reduce method: ",sumUs1);