// apply
if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (context, ...args) {
       
      context.apnaGreet = this;
    //  return new Function(context.apnaGreet(...args))
     return function(){
        context.apnaGreet(...args)
     }
       

    };
  }
  
  let obj1 = {
    firstName: "Ajay",
    greet: function (s1) {
      console.log(this.firstName, s1);
    },
  };
  
  let obj2 = {
    firstName: "Vijay",
  };
  
  // obj1.greet.myCall(obj2, "demo");
//   obj1.greet.apply(obj2, ["demo", "aminf"]);
let result =  obj1.greet.myBind(obj2, "demo");

result();