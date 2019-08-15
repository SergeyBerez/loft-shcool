//============== рекурсия функция

var consoleRec = require('./modul');
consoleRec([1, 2, 3, 5]);

// --------------------запросили модуль foreach ---------------------
var foreach = require('./modul_ForEach');
let array = [10, 20, 30, 40, 50];

foreach(array, function(item, i) {
  console.log(item + ':' + i);
});
console.log('выодим элементы');
// --------------------запросили модуль фильтр ---------------------
let arr = [1, 7, 8, 9, 2, 3, 4, 5, 6];
var myFilterArr = require('./modul_myFilter');

var newArr = myFilterArr(arr, function(item) {
  return item > 7;
});
console.log(newArr);
console.log('фильтруем элементы по условию');
// --------------------запросили модуль map ---------------------
let arrmap = [1, 7, 8, 9, 2, 3, 4, 5, 6];
var myMap = require('./modul_map');

var myMap = myMap(arrmap, function(item) {
  return item * item;
});
console.log(myMap);
console.log('умножаем элементы что то делаем');
//================== сравнение обектов ---------------
var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
    },
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10),
};

var objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop6: new Date('2016/03/10'),
  prop4: {
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
    },
    subProp1: 'sub value1',
  },
};
let deepEqual = require('./modul_obj');
console.log('сравниваем два обьекта');
console.log(deepEqual(objA, objB));
// ============модуль калькулятора

var calculator = require('./calculator');

var Mycalc = calculator(10);
console.log('это модуль калькулятора');
console.log(Mycalc.diff(1, 2, 2));
