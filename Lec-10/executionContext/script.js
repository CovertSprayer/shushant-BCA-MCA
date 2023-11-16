// var a = 10;

// function b(){
//     var c = 20;
//     console.log('Inside function b');
//     console.log(c);
// }

// console.log(a);
// b();



// console.log(a);

// function b(){
//     console.log('Inside b fun');
//     console.log(c);
//     var c = 20;
// }

// var a = 10;
// b();


console.log(a);

function b(){
    console.log('Inside b fun');
    c();
    
    var d = 20;
    function c(){
        console.log(d);
    }
}

var a = 10;
b();



