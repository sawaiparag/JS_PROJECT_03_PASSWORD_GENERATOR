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

generateEl.addEventListener('click', () => {
    const length= +lengthEl.value;
    const hasLower= lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText= generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});


// generateEl.addEventListener('click', () => {
    
// })

// function generatePassword(lower, upper, number, symbol, length) {
    
// }

// function getRandomLower() {
// }

// function getRandomUpper() {
// }

// function getRandomNumber() {
// }

// function getRandomSymbol() {
// }





// clipboardEl.addEventListener('click', () => {
//     // const textarea = document.createElement('textarea');
//     const password = resultEl.innerText;

//     if (!password)  { return; }
//     navigator.clipboard.writeText(password)
// });

generateEl.addEventListener('click', () => {
    const length= +lengthEl.value;
    const hasLower= lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText= generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

//copy password
clipboardEl.addEventListener('click', ()=>{
    let Password = resultEl.innerHTML;
    if (Password === "") {
        console.log(Password, "hello");
        return
        alert("Please genrate Password first");  
    }
    navigator.clipboard.writeText(resultEl.innerHTML);
    alert('coppied the text:' +resultEl.innerHTML);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    
    const typesArr= [{ lower}, {upper}, {number}, {symbol}].filter
    (
        (item)=> Object.values(item)[0]);
//selected type not included
        if (!typesCount === 0){
            return "";
        }

        //loop
        for (let i=0; i< length; i += typesCount){
            typesArr.forEach((type) => {
                const funcName = Object.keys(type)[0];
                generatePassword += randomFunc[funcName]();
            });
        }
        const finalPassword = generatePassword.slice(0, length);
        return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols='!@#$%^&*(){}[]=<>/,.';  
    return symbols[Math.floor(Math.random() * symbols.length)];
}