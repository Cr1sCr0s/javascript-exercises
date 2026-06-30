const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

const multiply = function(array) {
  return array.reduce((result, num) => result * num, 1);
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(num) {
  if(num < 0) return undefined;
  if(num === 0) return 1;
	let total = num;
  for(let i=1; i<num; i++) {total *= num - i;}
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
