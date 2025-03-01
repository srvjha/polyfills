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


// // let expenses = [
// //     { description: "Groceries", amount: 50, category: "Food" },
// //     { description: "Electricity Bill", amount: 100, category: "Utilities" },
// //     { description: "Dinner", amount: 30, category: "Food" },
// //     { description: "Internet Bill", amount: 50, category: "Utilities" },
// //   ];

  
// // //   let expenseReport = expenses.reduce((acc,curr)=>{
// // //     if(acc)
// // //   })


// let ratings = [
//     {
//         title:"Movie A",
//         ratings:[2,3,4]
//     },{
//         title:"Movie B",
//         ratings:[5,7,4]
//     },{
//         title:"Movie C",
//         ratings:[9,3,4]
//     }
// ]

// let avgMovieRatings = ratings.map((movie)=>{
//     let avgRating = (movie.ratings.reduce((acc,val)=>acc+val,0))/movie.ratings.length;
//     console.log(avgRating)
//     // movie.ratings = Number(avgRating.toFixed(2)); // yeh original ko change kr dega
//     // return movie
//     return {title:movie.title,ratings:avgRating}
// })

// console.log(avgMovieRatings)
// console.log(ratings)

const obj = {
    personName : "Saurav",
    greet :function(){
       return `HEllO ${this.personName}`
    }
}

console.log("a");
setTimeout(obj.greet,2000);
console.log("b")