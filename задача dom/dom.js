// Создать модуль, который экспортирует функцию `prepend`
// prepend имеет два параметра, в которые нужно передать элементы
// Задача функции - вставить второй элемент в начало первого. Например:
// `prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.

let cont = document.querySelector('.conteiner');
// function addBackground(e) {
//   e.target.classList.toggle('background');
//   console.log(e.currentTarget);
// }
// cont.addEventListener('click', addBackground);

// let countelement = 0;
// let countenode = 0;
// for (let i = 0; i < cont.childNodes.length; i++) {
//   var node = cont.childNodes[i].nodeType;
//   if (node == 1) {
//     countelement++;
//   }
//   if (node == 3) {
//     countenode++;
//   }
// }
// console.log(cont.childNodes);
//console.log('element == ' + countelement);
//console.log('text node == ' + countenode);
//    узел дом .childNodes[0] элемент перед которым вставляетс новый елемент
function prepend(cont, elem) {
  cont.insertBefore(elem, cont.childNodes[0]); // cont.insertBefore cont родительский елемент

  console.log(cont.childNodes);
}
let div = document.querySelector('.box4');

let newElement = document.createElement('span');
newElement.textContent = 'привет';
prepend(cont, div); // добавляем элемент
