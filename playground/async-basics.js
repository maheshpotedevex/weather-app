console.log('Starting App.');
setTimeout(() => {
    console.log('Inside a callback');
}, 2000); // 2000 Milliseconds means 2 seconds.

setTimeout(() => {
    console.log('Second setTimeout');
}, 0);
console.log('Finishing App.');