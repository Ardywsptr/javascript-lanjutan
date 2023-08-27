//? 1. HTML Fragments
// const mhs = {
//     nama: 'Ardy Wirasaputra',
//     umurr: 24,
//     nim: 181011450168,
//     email: 'Ardywirasaputra@gmail.com'
// };

// const el = `<div class="mhs">
//                 <h2>${mhs.nama}</h2>
//                 <span class="nrp">${mhs.nim}</span>
//             </div>`;

// document.body.innerHTML = el;


//? 2. looping HTML Fragments
// const mhs = [{
//         nama: 'Ardy',
//         email: 'Ardy@gmail.com'
//     },
//     {
//         nama: 'cici',
//         email: 'cici@gmail.com'
//     },
//     {
//         nama: 'putra',
//         email: 'putra@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(std=>`<ul>
// <li>${std.nama}</li>
//     <li>${std.email}</li>
// </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;


//? 3. conditional HTML Fragments
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat ${lagu.feat})` : ``}</li>
//     </ul>
// </div>`

// document.body.innerHTML = el;


//? 4. Nested HTML Fragments
const mhs = {
    nama: 'Ardy',
    semester: 8,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah: 
    <ol>
    ${mhs.mataKuliah.map(mk=>`<li>${mk}</li>`).join('')}
    </ol>
</div>`

document.body.innerHTML = el;