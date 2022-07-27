const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {
   let arrWordsBi = [];
   let arrWordsMorse = [];
   let space = '**********';
   let result = "";

   for (i = 0; i < expr.length; i += 10) {
      arrWordsBi.push(expr.slice(i, i + 10));
   }
   for (i = 0; i < arrWordsBi.length; i++) {
      let a = (arrWordsBi[i].match(/.{1,2}/g).join(''))
         .replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '')
      arrWordsMorse.push(a)
   }

   let keys = Object.keys(MORSE_TABLE)

   arrWordsMorse.forEach(item => {

      for (let i = 0; i < keys.length; i++) {
         if (item === keys[i]) result += MORSE_TABLE[keys[i]];
      }
      if (item === space) result += ' ';
   })

   return result

}

module.exports = {
   decode
}