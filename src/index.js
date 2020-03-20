const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

let result = "";
const mas = [];
let morse = [];

for(let i = 0; i < expr.length; i = i + 10){
const a = expr.slice(i, i + 10);
mas.push(a)
}

for(let j = 0; j < mas.length; j++){
morse = mas[j];
morse = morse.replace(/00/g, '');
morse = morse.replace(/10/g, '.')
morse = morse.replace(/11/g, '-');
result += MORSE_TABLE[morse] || " "
}

return result;
}

module.exports = {
    decode
}
