let cont = document.querySelector('.conteiner');

// let div = document.querySelectorAll('.box');
// for (let i = 0; i < div.length; i++) {
//   div[i].onclick = addBackground;
// }

function addBackground(e) {
  e.target.classList.toggle('background');
  console.log(e.currentTarget);
}

cont.addEventListener('click', addBackground);

let countelement = 0;
let countenode = 0;
for (let i = 0; i < cont.childNodes.length; i++) {
  var node = cont.childNodes[i].nodeType;
  if (node == 1) {
    countelement++;
  }
  if (node == 3) {
    countenode++;
  }
}
console.log(cont.childNodes);
//console.log('element == ' + countelement);
//console.log('text node == ' + countenode);

function addElement(dom, elem) {
  dom.parentNode.insertBefore(elem, dom);

  //console.log(dom.parentNode);
}
let newElement = document.createElement('span');
newElement.textContent = 'привет';
addElement(cont, newElement);

function deleteTextNodes(domElement) {
  for (let i = 0; i < domElement.childNodes.length; i++) {
    var node = domElement.childNodes[i].nodeType;
    if (node == 3) {
      domElement.removeChild(domElement.childNodes[i]);
    }
  }
}
deleteTextNodes(cont);
console.log(document.body.children[0].childNodes);
console.log(cont.childNodes);
