// cara membuat object

// 1.object literal
// PROBLEM: TIDAK EFEKTIF UNTUK OBJEK YG BANYAK

// const mhs = {
//     name: "Ardy Wirasaputra",
//     energy: 10,

//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`selamat makan ${this.name}! \nSekarang energi anda bertambah menjadi ${this.energy}`);
//     },

//     main: function (jam) {
//         this.energy -= jam;
//         console.log(`selamat bermain ${this.name}!\nSekarang energi anda berkurang menjadi ${this.energy}`);
//     },

//     tidur: function (jam) {
//         this.energy += jam * 2;
//         console.log(`selamat tidur ${this.name}!\nSekarang energi anda bertambah menjadi ${this.energy}`);
//     }
// }
// console.log(mhs.makan(20));

// const mhs2 = {
//     name: "Cici Awalia",
//     energy: 7,

//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`selamat makan ${this.name}! \nSekarang energi anda bertambah menjadi ${this.energy}`);
//     },

//     main: function (jam) {
//         this.energy -= jam;
//         console.log(`selamat bermain ${this.name}!\nSekarang energi anda berkurang menjadi ${this.energy}`);
//     },

//     tidur: function (jam) {
//         this.energy += jam * 2;
//         console.log(`selamat tidur ${this.name}!\nSekarang energi anda bertambah menjadi ${this.energy}`);
//     }
// }
// console.log(mhs2.makan(30));



// 2. function declaration
// PROBLEM: dibalik layar membuat objek baru sesuai dengan jumlah instance 
// SOLUTION: dengan menggunakan objek.created(), memisahkan method menjadi sebuah objek dan hubungkan dengan parent nya menggunakan object.create()

// function ObjMhs(name, energy) {
//     let mhs = {};

//     mhs.name = name;
//     mhs.energy = energy;

//     mhs.makan = function (porsi) {
//             this.energy += porsi;
//             console.log(`selamat makan ${this.name}! \nSekarang energy anda bertambah menjadi ${this.energy}`);
//         },

//     mhs.main = function (jam) {
//         this.energy -= jam;
//         console.log(`selamat bermain ${this.name}!\nSekarang energi anda berkurang menjadi ${this.energy}`);
//     },

//     mhs.tidur = function (jam) {
//         this.energy += jam * 2;
//         console.log(`selamat tidur ${this.name}!\nSekarang energi anda bertambah menjadi ${this.energy}`);
//     }

//     return mhs;
// }

// let ardy = ObjMhs("Ardy Wirasaputra", 10);
// console.log(ardy.makan(20));

// let cici = ObjMhs("Cici Awalia", 7);
// console.log(cici.makan(20));

// let zahra = ObjMhs("Zahra Devita", 6);
// console.log(zahra.makan(20));



// 3. costructor function
// function Objmhs(name, energy) {
//     this.name = name;
//     this.energy = energy;

//     this.makan = function (porsi) {
//             this.energy += porsi;
//             console.log(`selamat makan ${this.name}! \nSekarang energy anda bertambah menjadi ${this.energy}`);
//         },

//         this.main = function (jam) {
//             this.energy -= jam;
//             console.log(`selamat bermain ${this.name}!\nSekarang energi anda berkurang menjadi ${this.energy}`);
//         },

//         this.tidur = function (jam) {
//             this.energy += jam * 2;
//             console.log(`selamat tidur ${this.name}!\nSekarang energi anda bertambah menjadi ${this.energy}`);
//         }
// }

// let ardy = new Objmhs("Ardy Wirasaputra", 10);
// console.log(ardy.makan(20));



// // 4. constructor ES6 -> berubah menjadi class
class Objmhs {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        console.log(`selamat makan ${this.name}! \nSekarang energy anda bertambah menjadi ${this.energy}`);
    }

    main(jam) {
        this.energy -= jam;
        console.log(`selamat bermain ${this.name}!\nSekarang energi anda berkurang menjadi ${this.energy}`);
    }

    tidur(jam) {
        this.energy += jam * 2;
        console.log(`selamat tidur ${this.name}!\nSekarang energi anda bertambah menjadi ${this.energy}`);
    }
}

let ardy = new Objmhs("Ardy Wirasaputra", 10);
console.log(ardy);