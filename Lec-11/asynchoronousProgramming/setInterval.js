
let id = setInterval(()=>{
    console.log('Hello');
}, 200);

setTimeout(() => {
    clearInterval(id);
}, 3000);