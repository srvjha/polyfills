const userProfile = {
    name:"saurav",
    age:23,
    city:"silvassa",
    "phone-no":9993882745,
    job_profile:{
        role:"Full Stack Developer",
        experience:"1 year",
        skills:{
            frontend:["HTML","CSS","Javascript","Reactjs","NextJs","Typescript"],
            backend :["Nodejs","Mongo","MySql","RESTAPIs","Docker","Redis","Websockets"]
        }
    },
    contactMe(){
        console.log(`Please Contact Me on: ${["phone-no"]}`)
    }
}
//console.log(typeof userProfile["phone-no"])
const storeUserProfile = JSON.stringify('sgsdg');
//console.log(storeUserProfile);

// Polyfill of JSON Stringify 
const sampleObj = {
    test:"user1"
}

// Signature :- Return Converted String version of the input obj | Input:- value
// If type of string then let it be if number let it be, convert the key to string as value is either string or number
// ignore functions,null, undefined


    JSON.myStringify = function(value){
        // handling primitive values
        if(typeof value === "string") return `"${value}"`;
        if(
            typeof value === "number" ||
            typeof value === "boolean" ||
            typeof value === null
         )
         {
            return String(value);
         }

         // Igonre if type of is function,undefined,symbol

         // Handling non primitive 
         if(Array.isArray(value)){
            let arrayToString = value.map((element)=>JSON.myStringify(element) || null);
            console.log("arrayToString: ",arrayToString)
            return `[${arrayToString.join(",")}]`
         }
       


    }


console.log(JSON.myStringify(["q",2,5,6]));
console.log(JSON.stringify(["q",2,5,6]));