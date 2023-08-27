//! Tagged templates
const nama = 'Ardy'
const usia = 24

function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => result += `${str}${values[i] ||''}`)
    // return result;

    //? cara lebih ringkas
    return strings.reduce((akumulasi, nilaiSekarang, i) =>
        `${akumulasi}${nilaiSekarang}${values[i] || ''}`, '');
}

const str = coba `Halo, nama saya adalah ${nama} dan usia saya ${usia}`;

console.log(str);


//! penggunaan/implementasi tagged template

//? escaping/sanitasi HTML tags
// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = 'pertyr baelish';
// const aboutMe = `I love to do devil onload='alert('I hacked you')`;

// const html = sanitize `
//     <h3>${name}</h3>
//     <p>${aboutMe}<p>
//     `;

//? translation/internationalization
// const html = i18m `hello ${nama}, you have ${amount}:c in your bank account.`

//? style component => paling sering digunakan pada front-end web