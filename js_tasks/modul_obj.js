// var objA = {
//   prop1: 'value1',
//   prop2: 'value2',
//   prop3: 'value3',
//   prop4: {
//     subProp1: 'sub value1',
//     subProp2: {
//       subSubProp1: 'sub sub value1',
//       subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
//     },
//   },
//   prop5: 1000,
//   prop6: new Date(2016, 2, 10),
// };

// var objB = {
//   prop5: 1000,
//   prop3: 'value3',
//   prop1: 'value1',
//   prop2: 'value2',
//   prop6: new Date('2016/03/10'),
//   prop4: {
//     subProp2: {
//       subSubProp1: 'sub sub value1',
//       subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5],
//     },
//     subProp1: 'sub value1',
//   },
// };

//console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true
//console.log(Object.keys(objA)[0]);

function deepEqual(obja, objb) {
  var res = 'равны';
  obje(obja, objb);
  function obje(obja, objb) {
    for (let key in obja) {
      // проверяем длинну обьетка
      if (Object.keys(obja).length != Object.keys(objb).length) {
        res = 'не равны ';
      }

      // проверяем тип обьекта и сравниваем его значения
      if (obja[key] instanceof Date) {
        if (obja[key].valueOf() != objb[key].valueOf()) {
          res = 'не равны';
        }
      }
      // проверяем условие если обьект то вызываем функцию и оператор for иначе
      // проверямем условие ра не равенсвто
      if (typeof obja[key] === 'object' && typeof objb[key] === 'object') {
        obje(obja[key], objb[key]);
      } else if (obja[key] != objb[key]) {
        res = 'не равны ';
      }
    }
  }
  return res;
}

module.exports = deepEqual;
