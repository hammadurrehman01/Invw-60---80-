// var a = 10;
// var a = 20;
// console.log(a);


// var a = 10;
// a = 20;
// console.log(a);





// let a = 10;
// let a = 20; // Error


// let a = 10;
// a = 20;
// console.log(a);



// const a = 10;
// const a = 20; // Error


// const a = 10;
// a = 20; // Error







// var a = 10;
// let b = 20;
// const c = 30;

// if (true) {
//     var a = 30
//     let b = 50;
//     const c = 80;
//     console.log(a); // 30
//     console.log(b); // 50
//     console.log(c); // 80
// }

// console.log(a); // 30
// console.log(b); // 20
// console.log(c); // 30












// let myName = "Hammad Ur Rehman";

// if (true) {
//     let myName = "Rafay Khan"
//     console.log(myName);
// }

// console.log(myName);







// const myName = "Hammad Ur Rehman";

// if (true) {
//     myName = "Rafay Khan" // Error
//     console.log(myName);
// }

// console.log(myName);








// let username = "Hammad";

// function login() {
//     username = "john";
// }

// console.log(username);






// ================== First we need to know about about the block and global scope ================== //

// for (var i = 0; i < 4; i++) {}
// console.log(i); // 4

// whenever we use var keyword and overwrite it in the inside of a block so the its value will be overwritten because of the global scope but in let in every iteration its value will be considered as new value in each iteration


// for (let i = 0; i < 4; i++) { }
// console.log(i); // Error: i is not defined



// ================== Second we need to know about about the event loop ================== //


// koi bhi sync function jab run hota hay javascript me tw wo seedha callstack me jata hay and and wahan se bahar aajaata hay and jab async function call hota hay tw jab wo call stack k pass jaata hay tw call stack usy web api k pass bhej deti hay or wahan wo apna task complete krega given time pe and then wo task queue me chala jaiyga or wahan event loop musalsal tun ho rha hoga or wo dekhega k call stack empty hay agar empty hay tw wo task queue me pry huay task ko cal stack me rkhdega



// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0); // 3, 3, 3
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0); // 0, 1, 2
// }





// for (var i = 0; i < 3; i++) {
//     ((i) => {
//         setTimeout(() => {
//             console.log(i);
//         }, 0)
//     })(i)
// } 
// now 0, 1, 2 !!!!!!!!
