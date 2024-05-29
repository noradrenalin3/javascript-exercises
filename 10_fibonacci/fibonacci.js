const fibonacci = function(num) {
    if (num < 0) {
		return 'OOPS';
	}
    if (num < 2) {
		return Number(num);
	}
    else {
        function formula(n = 0) {
            if (n < 0) {return 'OOPS'}
            if (n < 2) {return n};
            return formula(n - 1) + formula(n -2);
        }
        function fibonacciGen() {
            let index = 1;
            return function() {
                return formula(index++);
            }
        }

        let fibonacciSequence = fibonacciGen();

        const numbers = [];
        for (let i = 0; i < num; i++) {
            numbers.push(fibonacciSequence());
        }
		return Number(numbers.pop());
	}
};

// Do not edit below this line
module.exports = fibonacci;
