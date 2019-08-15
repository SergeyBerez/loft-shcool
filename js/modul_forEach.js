function myForeach(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    f(i, arr[i], arr);
  }
}
// var arr = [1, 2, 58, 7, 6];
// myForeach(arr, function(i, item) {
//   console.log(item);
// });

module.exports = myForeach;
