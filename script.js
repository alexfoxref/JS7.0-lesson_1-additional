'use strict'

let num = 33721,
    numStr = '' + num, //записываем число в строчную переменную
    resMult = 1, //результат умножения
    resExp = 1, //результат возведения в степень
    resExpStr; //строчная запись результата возведения в степень

for (let i = 0; i < numStr.length; i++) {
    resMult *= +numStr[i];
}

console.log(resMult);

for (let i = 0; i < 3; i++) {
    resExp *= resMult;
}

resExpStr = '' + resExp;

console.log(resExpStr[0] + resExpStr[1]);