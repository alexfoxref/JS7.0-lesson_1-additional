'use strict'

let num = 33721,
    numStr = '' + num, //записываем число в строчную переменную
    res = 1,
    resStr; //строчная запись результата возведения в степень

for (let i = 0; i < numStr.length; i++) {
    res *= +numStr[i];
}

console.log(res);

res **= 3;

resStr = '' + res;

console.log(resStr[0] + resStr[1]);