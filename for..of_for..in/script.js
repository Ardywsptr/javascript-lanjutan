//! for..of and for..in

//? looping pada array

const mhs = ['ardy', 'wira', 'saputra'];

//* for
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
}

//*  forEach(untuk array)
mhs.forEach((m) => console.log(m))

//* for..of
for (const m of mhs) {
    console.log(m);
}


//? looping pada array dengan index

//*  forEach(untuk array)
mhs.forEach((m, i) => {
    return console.log(`${m} adalah mahasiswa index ke-${i+1}`)
})

//* for..of
for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa index ke-${i+1}`)

}

//? looping pada strings

const nama = 'Ardy wirasaputra'

//* forEach(untuk array)
nama.split('').forEach((char) => console.log(char))

//* for..of
for (const char of nama) {
    console.log(char);
}


//? looping pada NodeList

const liNama = document.querySelectorAll('.nama');

//* forEach(untuk array)
liNama.forEach(li => console.log(li.textContent))

//* for..of
for (const li of liNama) {
    console.log(li.textContent);
}


//? looping pada arguments
function jumlahkanAngka() {
    //return arguments.rerduce((a, i)   => a+1);
    //arguments.forEach(a => jumlah += a);
    let jumlah = 0;
    for (arg of arguments) {
        jumlah += arg;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));


//? looping pada objects

//* for..in
const mahasiswa = {
    nama: 'Ardy',
    nim: 181011450168,
    umur: 23
}

//looping properti
for (m in mahasiswa) {
    console.log(m);
}
//looping nilai
for (m in mahasiswa) {
    console.log(mahasiswa[m]);
}