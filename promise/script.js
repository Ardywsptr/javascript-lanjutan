//! Menggunakan ajax

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             const movie = JSON.parse(xhr.response).Search;
//             movie.forEach(m => {
//                 console.log(m.Title);
//             })
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open("get", "http://www.omdbapi.com/?apikey=d76044a2&s=avengers");
// xhr.send();

//! Menggunakan fetch
// fetch("http://www.omdbapi.com/?apikey=d76044a2&s=avengers")
//     .then(response => response.json())
//     .then(response => console.log(response))

//! Promise
//=> sebuah object yg mempresentasikan keberhasilan/kegagalan sebuah event asynchronous dimasa yang akan datang
//=> sebuah solusi untuk menggantikan ajax yang terlalu rumit
//=> sebuah solusi untuk callback hell
//=> janji (terpenuhi/ingkar/menunggu)
//=> states (fulfilled/reject/pending)
//=> 3 fungsi callback promise :
//--> resolve -> dibuat ketika states terpenuhi
//--> reject -> dibuat ketika states ingkar / tidak terpenuhi
//--> finally -> dibuat ketika waktu menunggu selesai
//=> 2 aksi ketika promise terpenuhi/ingkar :
//--> then -> dibuat jika promise terpenuhi
//--> catch -> dibuat jika promise ingkar
//=> promise biasa dipakai ketika request API

//! Contoh 1:Promise
// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve("janji telah ditepati");
//     } else {
//         reject("ingkar janji");
//     }
// });

// janji
//     .then(response => console.log("OK!" + response))
//     .catch(response => console.log("NOT OK!" + response))

//! Contoh 2:Promise menggunakan simulasi callback     
//? membuat promise
// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve("janji telah ditepati setelah beberapa waktu");
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject("janji tidak ditepati setelah beberapa waktu");
//         }, 2000)
//     }
// });

//? menggunakan promise
// console.log("mulai");
// janji
//     .finally(() => console.log("selesai menunggu")) //-> biasa dimanfaatkan untuk loader
//     .then(response => console.log("OK!" + response))
//     .catch(response => console.log("NOT OK!" + response));
// console.log("selesai");

//! Promise All
//=> sebuah method promise yg digunakan untuk memanggil beberapa aksi dari beberapa sumber API sekaligus

//! contoh:promiseAll()
const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            judul: "Avengers",
            sutradara: "Ardy Wirasaputra",
            pemeran: "Putra"
        }])
    }, 2000)
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            kota: "Bandung",
            temp: "26",
            kondisi: "Cerah"
        }])
    }, 1000)
})

// film.then(respons => console.log(respons));
// cuaca.then(respons => console.log(respons));


console.log("mulai");
Promise.all([film, cuaca])
    .then(respons => {
        const [film, cuaca] = respons;
        console.log(film);
        console.log(cuaca);
    })
console.log("selesai");