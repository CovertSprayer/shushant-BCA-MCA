var arr = [1,2,3,3,4,5];
console.log(arr);
console.log(typeof arr);

// ------------ normal loop
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// ----------- for of
var sum = 0;
for(var num of arr){
    sum += num;
    console.log(num);
}
console.log(sum);


// -------------- for in
var car = {
    name:'fortuner',
    mileage:'10kmpl',
    wheels:5,
    color:'white',
    seats:7
}

console.log(car);
for(var key in car){
    console.log(car[key]);
}

for(var key in arr){
    console.log(arr[key]);
}



