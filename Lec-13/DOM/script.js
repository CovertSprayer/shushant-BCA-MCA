const headings = document.getElementsByTagName('h1');
const h1 = headings[0];

// h1.style.color = "red";
// h1.style.border = "2px solid red";
// h1.style.backgroundColor = 'lightgreen';
// h1.style.textAlign = 'center';
// console.log(h1);

// const p = document.getElementById('para');
// console.log(p);

// p.style.color = 'green';

// const favMovies = document.getElementsByClassName('fav-movie');
// console.log(favMovies);
// // favMovies[1].style.color = 'blue';

// for(let movie of favMovies){
//     movie.style.color = 'blue';
// }

const h4 = document.querySelector('h4');
console.log(h4);
h4.style.border = '1px solid green';

const para = document.querySelector('#para');
console.log(para);
para.style.color = 'red';

const favMovie = document.querySelector('.fav-movie');
console.log(favMovie);

const favMovies = document.querySelectorAll('.fav-movie');
console.log(favMovies);

// ======================================= 
// console.log(favMovie.innerText);
// console.log(favMovie.innerHTML);
// favMovie.innerText = '<em>ABCD</em>';
// favMovie.innerHTML = '<strong>ABCD</strong>';

console.log(para.getAttribute('id'));
console.log(favMovie.getAttribute('class'));

para.setAttribute('class', 'one');

const img = document.querySelector('img');
console.log(img);

img.setAttribute('src', 'https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D');

console.log(img.hasAttribute('alt'))

para.classList.add('one','two');
para.classList.remove('one');
h1.classList.toggle('random');
console.log(h1.classList.contains('random'))




