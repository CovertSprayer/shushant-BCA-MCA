var str = 'This Is Some String';
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());


var str1 = '       username         ';
console.log(str1);
console.log(str1.trimStart());
console.log(str1.trimEnd());
console.log(str1.trim());

console.log(str.substring(13, 18+1));
console.log(str.substring(13, str.length));
console.log(str.split(' '));

var photo = 'profile.jpg';

console.log(photo.split('.')[0] + '.zip');
console.log(photo.replace('p', 'P'));
console.log(photo.replaceAll('p', 'P'));






