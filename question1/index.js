/*
Create a script with a function named lowerCaseWords that takes a
mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
*/

// Function created:
function lowerCaseWords(arr){
    // declare variable
    var strArr = [];

    // returns promise resolved or rejected
    if(strArr = arr.filter(e => typeof e === "string")){
        console.log(strArr);
        return Promise.resolve(strArr);
    } else {
        return Promise.reject("There is no string in the array.")
    }
}

// Test Array: (From labtest pdf)
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Callback Function with parameter
lowerCaseWords(mixedArray);