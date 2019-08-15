var allNumbers = [1, 2, 4, 5, 6, 7, 8],
  someNumbers = ['привет', 4, 5, 'loftschool', 6, 7, 8],
  noNumbers = ['это', 'массив', 'без'];

function isAllTrue(arr, f) {
  if (arr.length === 0) {
    return false;
  }
  /* запустили цикл проверки на не число  если хоть один елемент не чило то цикл прекращается */
  for (let i = 0; i < arr.length; i++) {
    let elem = f(arr[i]);
    //console.log(elem);
    if (!elem) {
      return false + ' = ' + 'в массие есть не чило';
    }
  }
  return true + ' = ' + 'все елементы массива числовые';
}
function isNumber(val) {
  return typeof val === 'number';
}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

function isSomeTrue(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    let elem = f(arr[i]);
    //console.log(elem);
    if (elem) {
      return true + ' = ' + 'в массиве есть хоть 1 елемент число';
    }
  }
  return false + ' = ' + 'в массие есть не чило';
}
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
