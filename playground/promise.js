// Get input value
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject("Arguments must be a numbers");
        }
    }, 1500);
};

// USe catch error handler

asyncAdd(4, 5).then((res) => {
    console.log("Result: ", res);
    return asyncAdd(res, 11);
}).then((res) => {
    console.log("Should be expected 20 and it is -", res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// Note: The request library does not support promises.

//  ----------------------------------------------
// asyncAdd(4, 5).then((res) => {
//     console.log("Result: ", res);
//     return asyncAdd(res, 11);
// }, (errorMessage) => {
//     console.log("Error: ", errorMessage);
// }).then((res) => {
//     console.log("Should be expected 20 and it is -", res);
// }, (errorMessage) => {
//     console.log("Error: ", errorMessage);
// });

// ---------------


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve("Hey. It worked!");
//         reject("Unable to connect@");
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log("Success: ", message);
// }, (errorMessage) => {
//     console.log("Error: ", errorMessage);
// });