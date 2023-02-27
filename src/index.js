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
    ' ': ' '
};

function decode(expr) {
    let tenArr = [],
        chunk = 10,
        secArr =[];

    for (let i = 0; i < expr.length; i+= chunk) {
        tenArr.push(expr.slice(i, i + chunk));   
    }
    const spaces = /(\*{10})/gi;
    tenArr = tenArr.map((element) => element.replace(spaces, ' '));

    for (let i = 0; i < tenArr.length; i++) {
        let row = [];
    
    for (let j = 0; j < 10; j +=2) {
        row.push(tenArr[i].slice(j, j + 2));
    }
    secArr.push(row.filter(r => r !== '00'));
    }
    const dots = /10/gi;
    const dashes = /11/gi


    const decodedArr = secArr.map((row) => row.map(item => {
        const binary = item.replace(dots, '.').replace(dashes, '-')
        return binary
    }).join('')
    )
    const decodedText = decodedArr.map(code => MORSE_TABLE[code]).join('');

    return decodedText;
    }

module.exports = {
    decode
}