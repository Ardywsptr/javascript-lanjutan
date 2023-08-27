//! Rest parameters -> mempresentasikan arguments pada function dengan jumlah yang  tidak terbatas menjadi sebuah array

//? rest parameters biasa
function myFunc(...myFunc) {
    // return arguments;
    // return Array.from(arguments)
    // return [...arguments]
    return myFunc
}

console.log(myFunc(1, 2, 3, 4, 5));


//? penjumlahan arguments menggunakan rest parameters
function jumlahkan(...myArgs) {
    // let total = 0;

    // for (a of myArgs) {
    //     total += a;
    // }
    // return total;

    // best practice
    let jumlah = myArgs.reduce((akumulasi, nilaiSekarang) => akumulasi + nilaiSekarang)

    return jumlah;
}

console.log(jumlahkan(1, 2, 3, 4, 5));


//? array destructuring menggunakan rest parameters
const kelompok1 = ['Ardy', 'wira', 'saputra', 'cici', 'awalia'];

const [ketua, wakil, ...anggota] = kelompok1

console.log(anggota);


//? object destructuring menggunakan rest parameters
const team = {
    pm: 'Ardy',
    ux: 'wira',
    fe1: 'saputra',
    fe2: 'cici',
    be: 'awalia',
    devOps: 'nirwan'
}

const {
    be,
    ...myTeam
} = team;

console.log(myTeam);


//? filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'Ardy', false, true, 10, true, 'Wirasaputra'));