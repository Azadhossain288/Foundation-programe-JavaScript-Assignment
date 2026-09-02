
//...Problem 1...///

function describeValue(value){

     let type=typeof value;

     let truthiness=value? "truthy": "falsy";

     return type+ "|" +truthiness;

}


console.log(describeValue("hello"));     // string | truthy
console.log(describeValue(""));        // string | falsy
console.log(describeValue(25));        // number | truthy
console.log(describeValue(0));         // number | falsy
console.log(describeValue(true));      // boolean | truthy
console.log(describeValue(null));      // object | falsy
console.log(describeValue(undefined)); // undefined | falsy

// Special cases:
console.log(describeValue("0"));       // string | truthy (karon eta khali string noy)
console.log(describeValue(NaN));       // number | falsy (typeof NaN holo "number", ebong NaN ekta falsy value)






