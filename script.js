const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
//     const textspace = document.createElement("textspace");
//     const pass = resultEl.innerText;

//     if (!pass){
//         return;
//     }

//     textspace.value = pass;
//     document.body.appendChild(textspace);
//     textspace.select();
//     document.execCommand("copy");
//     textspace.remove();
//     alert("Pass Copied");  
 const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");  
 })

generateEl.addEventListener('click', () => {
    
})

function generatePassword(lower, upper, number, symbol, length) {
    
}

function getRandomLower() {
}

function getRandomUpper() {
}

function getRandomNumber() {
}

function getRandomSymbol() {
}