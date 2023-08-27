// ! Higher order functions -> function yang beroperasi pada function yang lain, baik itu digunakan dalam argument ataupun return value

function kerjakanTugas(mataKuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${mataKuliah}`)
    selesai();
}

function selesai() {
    alert('selesai mengerjakan tugas')
};

kerjakanTugas('pemrograman web', selesai);


//! contoh lain higher order functions (setTimeOut)

setTimeout(function () {
    console.log('Hello');
}, 1000)


//! contoh lain higher order functions (DOM)

const tombol = document.querySelector('#tombol');

tombol.addEventListener('click', function () {
    console.log('tombol di klik');
});


//! contoh lain higher order functions (Clorure)

function ucapkanSalam(waktu) {
    return function (nama) {
        return console.log(`Hallo ${nama}, selamat ${waktu}`);
    }
}

ucapkanSalam('Pagi')('ardy');

// //* atau
// let salam = ucapkanSalam('Pagi');
// salam('ardy');