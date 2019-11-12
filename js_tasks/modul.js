var i = 0;

function consoleRec(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    i++;
    consoleRec(arr); // функция рекурсивно вызывает саму себя , без использования цикла for
  }
}
module.exports = consoleRec;
