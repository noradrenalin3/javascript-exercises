const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (arr.reduce((acc, curr) => acc + curr, 0) === undefined) {
		return 0;
	} else {
		return arr.reduce((acc, curr) => acc + curr, 0);
	}
}

const multiply = function(arr) {
	return arr.reduce((acc, curr) => acc * curr);
}

const power = function(n, p) {
	return n ** p;
};

const factorial = function(num){
    if (num === 0 || num === 1) {
        return 1;
    } else {
        //const numbers = Array.from({ length: num }, (v, i) => i+1); 
        return Array.from({length: num})
            .map((v, i) => i + 1)
            .reduce((a, b) => a * b, 1); 
    };  
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
