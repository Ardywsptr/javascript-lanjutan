//!spread operator -> memecah iterables menjadi single element

const mhs = ['Ardy', 'Wira', 'Saputra'];

console.log(...mhs);
console.log(...mhs[1]);


//* penggunaan/impelementasi spread operator

//? menggabungkan beberapa array
const mahasiswa = ['Cici', 'Awalia', 'Nirwan'];
const dosen = ['Rengga', 'Iwan', 'Widyah'];

//sebelum
const orang = mahasiswa.concat(dosen);
//sesudah
const people = [...mahasiswa, ...dosen];

//jika ingin menambahkan item baru pada array gabungan
const gabung = [...mahasiswa, 'zahra', ...dosen]


//? meng-copy array
const mahasiswa1 = [...mahasiswa]
mahasiswa1[0] = 'fajar'


//? contoh lain 
const limhs = document.querySelectorAll('li');
//bentuk ini nodelist bukan array

//cara lama
// const mhsw = [];
// for (i = 0; i < limhs.length; i++) {
//     mhsw.push(limhs[i].textContent);
// }

//best practice
const mhsw = [...limhs].map(m => m.textContent)


//? contoh lain lebih praktikal
const nama = document.querySelector('.nama');

const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;

console.log(huruf);