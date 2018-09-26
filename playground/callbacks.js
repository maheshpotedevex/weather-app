// Simple synchronous callback.
var getUser = (id, callback) => { // 1.
    //debugger;
    var user = { // 3.
        id: id,
        name: 'Mahesh'
    };
    console.log('Before callback'); // 4.
    setTimeout(() => {
        callback(user); // 5.  print here i.e {id: 45, name: "Mahesh"}
    }, 3000);

};

getUser(45, (userObject) => { // 2.
    console.log(userObject);
});