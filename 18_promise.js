class MyPromise{
    constructor(executorFn){
       this._state = "pending";
       this._successCb = [];
       this._errorCb = [];
       this._finallyCb = [];

       executorFn(
           this.resolverFn.bind(this),
           this.resolverFn.bind(this),
         
       )
    }

    then(cb){
        if(this._state == "fulfilled"){
            cb(this.value)
        }
        this._successCb.push(cb)
        return this;
    }

    catch(cb){
        this._errorCb.push(cb)
        return this;
    }


    resolverFn(value){
         this._state = "fullfilled"
         this._successCb.forEach((cb)=>cb(value));
         this._finallyCb.forEach((cb)=>cb());
    }

    rejectFn(error){
        this._state = "rejected"
        this._errorCb.forEach((cb)=>cb(error));
        this._finallyCb.forEach((cb)=>cb());

    }

}


function wait(seconds){
   const p =  new MyPromise((resolve,reject)=>{
        setTimeout(()=> resolve(),seconds * 1000)
    })
    return p
}

wait(5).then(()=>console.log("Ho gye 5 seconds"))