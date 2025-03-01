// call
// if (!Function.prototype.myCall) {
//   Function.prototype.myCall = function (context, ...args) {
//     context.apnaGreet = this;
//     context.apnaGreet(...args);
//   };
// }

// let obj1 = {
//   firstName: "Ajay",
//   greet: function (s1) {
//     console.log(this.firstName, s1);
//   },
// };

// let obj2 = {
//   firstName: "Vijay",
// };

// obj1.greet.myCall(obj2, "demo");

// apply
if (!Function.prototype.myApply) {
    Function.prototype.myApply = function (context, args) {
       
      context.apnaGreet = this;
      context.apnaGreet(...args);
       

    };
  }
  
  let obj1 = {
    firstName: "Ajay",
    greet: function (s1, s2) {
      console.log(this.firstName, s1, s2);
    },
  };
  
  let obj2 = {
    firstName: "Vijay",
  };
  
  // obj1.greet.myCall(obj2, "demo");
  obj1.greet.apply(obj2, ["demo", "aminf"]);
  obj1.greet.myApply(obj2, ["demo", "aminf"]);
  