function calculator(n) {
  // this.number = number;

  // this.sum = function(a, b) {
  //   return this.number + 100 + a + b;
  // };
  return {
    sum: function() {
      var sum = '0';
      var i;
      for (let i = 0; i < arguments.length; i++) {
        sum = parseInt(sum) + arguments[i];
      }
      return sum + n;
    },
    diff: function() {
      var sum = 0;
      for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      return n - sum;
      // body
    },
    mul: function() {
      var sum = '1';
      for (let i = 0; i < arguments.length; i++) {
        sum *= parseInt(arguments[i]);
      }
      return n * sum;
      // body
    },
  };

  // body
}

module.exports = calculator;
