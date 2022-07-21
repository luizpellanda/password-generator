/* random generation for the options */
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
};

function getRandomUpper() {
  return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
};
function getRandomLower() {
  return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
};
function getRandomNumber() {
  return keys.number[Math.floor(Math.random() * keys.number.length)];
};
function getRandomSymbol() {
  return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
};


const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('upperCase');
const lowerCaseEl = document.getElementById('lowerCase');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('number');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

/* getting the values from html */

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

	console.log(hasSymbol);
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  
  let generatedPassword

  const typesCount = lower + upper + number + symbol;
  console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  console.log('typesArr: ', typesArr);

  if(typesCount == 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
}

