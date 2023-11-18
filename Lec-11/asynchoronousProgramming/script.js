console.log('Hello');

delay(3);

console.log('World');

function delay(n){
    let currTime = new Date().getTime();
    while(currTime + n*1000 > new Date().getTime()){

    }
}