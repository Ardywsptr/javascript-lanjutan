// // CLASS PADA JAVASCRIPT
// // SEBELUM ES6 MENGGUNAKAN PROTOTYPE

// function ObjMhs(name, energy) {
//     this.name = name;
//     thisis.energy = energy;
// }

// ObjMhs.prototype.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`selamat makan ${this.name}! \nSekarang energy anda bertambah menjadi ${this.energy}`);
// }

// ObjMhs.prototype.main = function (jam) {
//     this.energy -= jam;
//     console.log(`selamat makan ${this.name}, energi anda sekarang ${this.energy}`)
// }

// ObjMhs.prototype.tidur = function (jam) {
//     this.energy += jam * 2;
//     console.log(`selamat makan ${this.name}, energi anda sekarang ${this.energy}`)
// }

// let ardy = new ObjMhs("Ardy Wirasaputra", 10);
// let cici = new ObjMhs("Cici Awalia", 7);
// let zahra = new ObjMhs("Zahra Devita", 6);



// SESUDAH ES6 MENGGUNAKAN CLASS

class ObjMhs {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        console.log(`selamat makan ${this.name}, energi anda bertambah sekarang ${this.energy}`)
    }

    main(jam) {
        this.energy -= jam;
        console.log(`selamat bermain ${this.name}, energi anda berkurang sekarang ${this.energy}`)
    }

    tidur(jam) {
        this.energy += jam * 2;
        console.log(`selamat tidur ${this.name}, energi anda bertambah sekarang ${this.energy}`)
    }
}

let ardy = new ObjMhs("Ardy Wirasaputra", 10);
let cici = new ObjMhs("Cici Awalia", 7);
let zahra = new ObjMhs("Zahra Devita", 6);
console.log(ardy.makan(20));