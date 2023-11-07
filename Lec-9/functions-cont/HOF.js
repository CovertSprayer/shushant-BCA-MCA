
var str = 'Hello';

var sum = function(a, b){
    return a+b;
}

console.log(sum(50,60));
// console.log(sum);

function getMovie(movieName){
    // var movie1 = 'Sholey';
    // var movie2  = 'Avengers';
    // var movie3 = 'Spiderman';

    function movie1(){
        console.log('Inside movie1 fun, Sholey');
    }

    function movie2(){
        console.log('Inside movie2 fun, Avengers');
    }

    function movie3(){
        console.log('Inside movie3 fun, Spiderman');
    }

    if(movieName.toLowerCase() == 'sholey'){
        return movie1;
    }
    else if(movieName.toLowerCase() == 'avengers'){
        return movie2;
    }
    else if(movieName.toLowerCase() == 'spiderman'){
        return movie3;
    }
    else{
        return 'Movie not Found!!';
    }

}

var output = getMovie('SpiderMAN');
console.log(output());

