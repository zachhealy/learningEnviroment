const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
	for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (n === 0) return 1;
  total = 0;
	for(let i = a; i > 0; i--){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
