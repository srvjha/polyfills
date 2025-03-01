if(!Function.prototype.myCall){
    Function.prototype.myCall = function(context,...args){
      context.myFn = this;
      context.myFn(...args);
    }
}

function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log("Product ka this: ",this)
}
function Food(name,price){
    this.info = "It is a dairy product"
    console.log("Food ka this: ",this)
    Product.myCall(this,name,price)
    this.category = 'food';
}

const cheese = new Food('feta', 5);
console.log(cheese)
console.log(cheese.name); 

