// function greet(name, callback) {
//     console.log(`User name is ${name}`);
//     callback()
// }

// function callMe() {
//     console.log('I am callback function');
// }

// greet('John Doe', callMe)






// Uffff too many lines
// function calculate(val1, val2, operation) {
//     return operation(val1, val2)
// }

// const addition = calculate(10, 20, (num1, num2) => {
//     return num1 + num2
// })

// console.log(addition);



// function calculate(val1, val2, operation) {
//     return operation(val1, val2)
// }

// const addition = (a, b) => a + b;
// const subtraction = (a, b) => a - b;
// const multiplication = (a, b) => a * b;
// const division = (a, b) => a / b;

// const addResult = calculate(10, 20, addition);
// console.log(addResult);

// const subResult = calculate(10, 20, subtraction);
// console.log(subResult);

// const multiplicationResult = calculate(10, 20, multiplication);
// console.log(multiplicationResult);

// const divisionResult = calculate(10, 20, division);
// console.log(divisionResult);



////////////////////////////
// Data retrieving using callback

// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Data retrieved!')
//     }, 2000);
// }


// fetchData((data) => {
//     console.log(data);
// })






////////////////////////////
// Data retrieving using promise

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('s');
//         }, 1000);
//     })
// }

// fetchData().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     throw new Error(err)
// })