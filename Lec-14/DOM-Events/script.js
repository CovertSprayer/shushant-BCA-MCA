const btn = document.querySelector('button');

console.log(btn);
// btn.onclick = function(){
//     console.log('clicked!!');
// }

// btn.onclick = function(){
//     console.log('another func')
// }

btn.addEventListener('click', function(e){
    console.log(e.target.previousElementSibling.style.color = 'red')
    console.log('clicked!');
})

// btn.addEventListener('click', ()=>{
//     console.log('another function')
// })

btn.addEventListener('dblclick', ()=>{
    console.log('double clicked!!');
})

// ------------- click, dblclick, mouseenter, mouseleave, mousemove 
