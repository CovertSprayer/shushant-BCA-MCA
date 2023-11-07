var arr = [1,2,3,4];
var data = [
    {
        id:1,
        title:'Iphone 16',
        price:2000,
        desc:'Iphone 16 with 16GB RAM, 256GB ROM'
    },
    {
        id:2,
        title:'Set of Markers',
        price:20,
        desc:'Contains red, blue and green'
    },
    {
        id:3,
        title:'Laptop',
        price:5000,
        desc:'Amoled Display, 8GB RAM, 500GB SSD'
    }
];

// var newArr = arr.map(function(num, ind, arr){
//     // console.log(num, ind);
//     return num*2;
// })

// console.log(newArr);
// console.log(data);
// var newData = data.map((item, ind)=>{
//     if(item.price > 1000){
//         item.price -= 200;
//     }
//     return item;
// })

// console.log(newData);

var filteredData = data.filter(function(item){
    // if(item.price < 3000) return true;
    // else return false;

    return item.price < 3000;
})

var totaPrice = data.reduce(function(acc, item){
    return acc + item.price;
}, 0)

console.log(totaPrice);