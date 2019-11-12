let img = document.querySelectorAll('img');
let url3 =
  'https://i1.rozetka.ua/goods/12369298/64228591_images_12369298436.jpg';
let url1 =
  'http://zabavnik.club/wp-content/uploads/2018/07/mashinka_1_21100754.jpg';
let url2 = 'https://mamaluk.ua/images/26/93647830138369_small6.jpeg';

//  ======пришем свою функцию по загрузке картинок с колбеками
// function limgs(img, src, f) {
//   img.src = src;
//   img.addEventListener('load', function() {
//     if (f) {
//       //проверяем или передали колбек
//       f();
//     }
//   });
// }
// limgs(img[0], src1, function() {
//   console.log(1);
//   limgs(img[1], src2); // не передали параметр колбека
// });
//  ============Переписали на промисах загрузку картинок
function loadImg(img, src) {
  return new Promise(function(resolve, reject) {
    img.src = src;

    img.addEventListener('load', function(e) {
      resolve();
    });

    img.addEventListener('error', function(e) {
      reject();
    });
  });
}

loadImg(img[2], url3)
  .then(
    function() {
      console.log('3 картинка  загружена');
      return loadImg(img[0], url1);
    },
    function() {
      console.log('ошибка 3 картинка');
    },
  )
  .then(
    function() {
      console.log('1 кртинка  загружена');
      return loadImg(img[1], url2);
    },
    function() {
      console.log('1 кртинка  ошибка');
    },
  )
  .then(
    function() {
      console.log(' 2 кртинка  загружена');
    },
    function() {
      console.log(' ошибка 2 картинка');
    },
  );

