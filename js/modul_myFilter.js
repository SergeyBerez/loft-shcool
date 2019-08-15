function myFilterArr(arr, f) {
  var a = 0;
  var res = [];

  for (let i = 0; i < arr.length; i++) {
    var item = arr[i];
    var callbckRes = f(item);
    if (callbckRes) {
      res[a] = arr[i];
      a++;
    }
  }

  return res;
}

module.exports = myFilterArr;
