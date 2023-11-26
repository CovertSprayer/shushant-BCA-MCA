
function download(path){
    console.log('File started to download');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            file = path.split('/').pop();
            resolve(file);
        }, 3000);
    })
}

function compress(file){
    console.log('File started to compress');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

function upload(file){
    console.log(file, 'file started to upload');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            url = 'https://facebook.server.com/' + file;
            resolve(url);
        }, 3000);
    })
}

const url = 'www.facebook.com/profile.jpg'
// download(url)
//     .then(function(downloadedFile){
//         console.log('File downloaded successfully', downloadedFile);
//         return compress(downloadedFile);
//     })
//     .then(function(compressedFile){
//         console.log('file compressed successfully to ', compressedFile);
//         return upload(compressedFile);
//     })
//     .then(function(finalPath){
//         console.log('file successfully uploaded to ', finalPath)
//     })
//     .catch(err => console.log(err));

// console.log('START');

async function main(){
    downloadedFile = await download(url);
    console.log('File downloaded successfully', downloadedFile);

    compressedFile = await compress(downloadedFile);
    console.log('file compressed successfully to ', compressedFile);

    finalPath = await upload(compressedFile);
    console.log('file successfully uploaded to ', finalPath)
}

// main();

// console.log('THE END');


// =========================

const URL = 'https://dummyjson.com/products/1';

// fetch(URL)
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })

async function getData(){
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    console.log(data.brand);
}

getData();