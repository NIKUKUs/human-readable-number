module.exports = function toReadable (number) {

	const
	 value1 = {

		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten"
	},

	 value2 = {

		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen"
	},

	 value3 = {

		2: "twenty",
		3: "thirty",
		4: "forty",
		5: "fifty",
		6: "sixty",
		7: "seventy",
		8: "eighty",
		9: "ninety"
	};

	if (number === 0) {
        return "zero";
    }
    if (0 < number && number < 10) {
        return value1[number];
  
}
