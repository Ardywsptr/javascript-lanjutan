// 2. function declaration
// PROBLEM: dibalik layar membuat objek baru sesuai dengan jumlah instance 
// SOLUTION: dengan menggunakan objek.create(), memisahkan method menjadi sebuah objek dan hubungkan dengan parrent nya menggunakan object.create()
// best practice membuat object menggunakan function declaration

const methodMhs = {
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`selamat makan ${this.name}! \nSekarang energy anda bertambah menjadi ${this.energy}`);
    }
}

function ObjMhs(name, energy) {
    let mhs = Object.create(methodMhs)

    mhs.name = name;
    mhs.energy = energy;

    return mhs;
}

let ardy = ObjMhs("Ardy Wirasaputra", 10);
console.log(ardy.makan(20));

let cici = ObjMhs("Cici Awalia", 7);
console.log(cici.makan(20));

let zahra = ObjMhs("Zahra Devita", 6);
console.log(zahra.makan(20));