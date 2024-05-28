const palindromes = function(w) {
	//const myArray = Array.from(w);
	//const filtered = myArray
	const filtered = w
		.toLowerCase()
		.split('')
		.filter(char => /[a-zA-Z0-9]/.test(char))
		//.toString();
		.join('');
	//const stringToArr = Array.from(filtered);
	const reversed = filtered
		.split('')
		.reverse()
		.join('');
    return filtered === reversed;
}

// Do not edit below this line
module.exports = palindromes;
