var a = 20; //decleration and initialization
a = 40; // valid
var a = 80; // valid

let b = 100;
b = 200; // valid
// let b = 400; // not valid

const c = 1000;
// c = 400; // not valid
// const c = 800; // not valid

console.log(c);

// scope

// cannot access let and const in dead temporal zone
// console.log(val);
// let val1 = 200;

// console.log(val);
// let val2 = 200;