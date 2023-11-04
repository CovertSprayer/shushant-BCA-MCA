var numbers = [1, 2, 3, 4, 5];

console.log(numbers);
// -------------- to add or remove from back
// var len = numbers.push(10);
// var lastValue = numbers.pop();

// ------------- add or remove from front
// numbers.unshift(100);
// numbers.shift();
// numbers.shift();

// console.log(numbers);
// ------------------ add or remove from mid
// numbers.splice(1,3);
// numbers.splice(1);

// numbers.splice(2, 2, 400);
// console.log(numbers);


var arr1 = [1,2,3,4];
var arr2 = [5,6,7];
var arr3 = [10,11,12];

// var arr = arr1.concat(arr2);
var arr = arr2.concat(arr1, arr3);
console.log(arr);
console.log(arr1.join('+'));
