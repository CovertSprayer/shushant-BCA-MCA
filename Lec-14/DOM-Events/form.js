const form = document.getElementsByTagName('form')[0];
const inp = document.querySelector('input');
const h1 = document.querySelector('h1');

console.log(form);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('Form Submitted Successfully!');
    // console.log(inp.value)
    const text = inp.value;
    h1.innerText = text;
    inp.value = '';
})