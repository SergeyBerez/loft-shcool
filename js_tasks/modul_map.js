function myMap(arr, f) {
  var res = [];

  for (let i = 0; i < arr.length; i++) {
    var call = f(arr[i]);
    res[i] = call;
  }
  return res;
}

module.exports = myMap;
