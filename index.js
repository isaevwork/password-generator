const input = document.querySelector(".input__action-block");
const clipBoard = document.querySelector(".action_copy-btn");
const refreshBtn = document.querySelector(".action__refresh-btn");
const copyBtn = document.querySelector(".copyBtn");
const lengthInput = document.getElementById("number");

const dom = {
  numberFilter: document.querySelector("#check_number"),
  symbolFilter: document.querySelector("#check_symbol"),
  lowerCaseFilter: document.querySelector("#check_lowerCase"),
  upperCaseFilter: document.querySelector("#check_upperCase"),
};

const data = {
  letters: {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
  },
  number: "0123456789",
  symbol: `'><§!"№%:,.;()-_=@#$^&~/|*`,
};

// Рандомное число
function generateRandomNumber(maxNum) {
  const randomNumber = Math.round(Math.random() * maxNum);
  return randomNumber;
}

// Рандомно выбирается один из символов в объекте data
function generatePassword(obj, passLength) {
  const passwordArr = [];

  for (let i = 0; i < passLength; i++) {
    const idx = generateRandomNumber(obj.length - 1);
    passwordArr.push(obj[idx]);
  }
  return passwordArr.join("");
}

// Ограничение ввода в inputLength
lengthInput.oninput = function () {
  this.value = this.value.substr(0, 2);
};
// Генерируем пароль заданнной длины по клику кнопки
refreshBtn.onclick = (e) => {
  e.preventDefault();
  let filterAddString = "";
  if (lengthInput.value >= 4 && lengthInput.value <= 48) {
    if (dom.numberFilter.checked) {
      filterAddString += data.number;
    }
    if (dom.symbolFilter.checked) {
      filterAddString += data.symbol;
    }
    if (dom.lowerCaseFilter.checked) {
      filterAddString += data.letters.lower;
    }
    if (dom.upperCaseFilter.checked) {
      filterAddString += data.letters.upper;
    }
    input.value = generatePassword(filterAddString, lengthInput.value);
  } else {
    alert("Введите значение в интервале от 4 до 48 символов");
  }
};

// Вставляем сгенерированный пароль в инпут и валидируем инпут
copyBtn.onclick = () => {
  let filterAddString = "";
  if (lengthInput.value >= 4 && lengthInput.value <= 48) {
    if (dom.numberFilter.checked) {
      filterAddString += data.number;
    }
    if (dom.symbolFilter.checked) {
      filterAddString += data.symbol;
    }
    if (dom.lowerCaseFilter.checked) {
      filterAddString += data.letters.lower;
    }
    if (dom.upperCaseFilter.checked) {
      filterAddString += data.letters.upper;
    }
    input.value = generatePassword(filterAddString, lengthInput.value);
    navigator.clipboard.writeText(input.value);
  } else {
    alert("Введите значение в интервале от 4 до 48 символов");
  }
};

// Функция копирования пароля в буфер обмена
clipBoard.onclick = (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(input.value);
};

dom.numberFilter.onclick = () => {
  let filterAddString = "";
  if (lengthInput.value >= 4 && lengthInput.value <= 48) {
    if (dom.numberFilter.checked) {
      filterAddString += data.number;
    }
    if (dom.symbolFilter.checked) {
      filterAddString += data.symbol;
    }
    if (dom.lowerCaseFilter.checked) {
      filterAddString += data.letters.lower;
    }
    if (dom.upperCaseFilter.checked) {
      filterAddString += data.letters.upper;
    }
    input.value = generatePassword(filterAddString, lengthInput.value);
  }
};
dom.symbolFilter.onclick = () => {
  let filterAddString = "";
  if (lengthInput.value >= 4 && lengthInput.value <= 48) {
    if (dom.numberFilter.checked) {
      filterAddString += data.number;
    }
    if (dom.symbolFilter.checked) {
      filterAddString += data.symbol;
    }
    if (dom.lowerCaseFilter.checked) {
      filterAddString += data.letters.lower;
    }
    if (dom.upperCaseFilter.checked) {
      filterAddString += data.letters.upper;
    }
    input.value = generatePassword(filterAddString, lengthInput.value);
  }
};
dom.lowerCaseFilter.onclick = () => {
  let filterAddString = "";
  if (lengthInput.value >= 4 && lengthInput.value <= 48) {
    if (dom.numberFilter.checked) {
      filterAddString += data.number;
    }
    if (dom.symbolFilter.checked) {
      filterAddString += data.symbol;
    }
    if (dom.lowerCaseFilter.checked) {
      filterAddString += data.letters.lower;
    }
    if (dom.upperCaseFilter.checked) {
      filterAddString += data.letters.upper;
    }
    input.value = generatePassword(filterAddString, lengthInput.value);
  }
};
dom.upperCaseFilter.onclick = () => {
  let filterAddString = "";
  if (lengthInput.value >= 4 && lengthInput.value <= 48) {
    if (dom.numberFilter.checked) {
      filterAddString += data.number;
    }
    if (dom.symbolFilter.checked) {
      filterAddString += data.symbol;
    }
    if (dom.lowerCaseFilter.checked) {
      filterAddString += data.letters.lower;
    }
    if (dom.upperCaseFilter.checked) {
      filterAddString += data.letters.upper;
    }
    input.value = generatePassword(filterAddString, lengthInput.value);
  }
};
