// var i = 10;
// var timer = function() {
//   console.log(i);
//   i--;

//   if (i == 0) {
//     clearInterval(st);
//   }
// };

// var st = setInterval(timer, 1000);
// //clearInterval(st);

// body

// var inpt = document.querySelector('input');
var div = document.querySelector('.text');
btn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json',
  );
  xhr.send();
  xhr.addEventListener('load', () => {
    div.textContent = JSON.parse(xhr.responseText);
  });
});
