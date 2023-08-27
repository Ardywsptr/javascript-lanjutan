//! Template literals/string

const mhs = {
    nama: 'Ardy',
    umur: 24,
    nim: 181011450168
}
console.log(`Halo, nama saya ${mhs.nama}
umur saya ${mhs.umur} dan nim saya ${mhs.nim}`);

const el = `<div class="mhs">
                <h2>${mhs.nama}</h2>
                <p>umur saya ${mhs.umur} dengan nim ${mhs.nim}</p>
            </div>`

const element = document.getElementById('element');

element.innerHTML = el;