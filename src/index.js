module.exports = function toReadable (number) {

	const value1 = {

		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten"
	};

	const value2 = {

		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty"
	};

	const value3 = {

		3: "thirty",
		4: "forty",
		5: "fifty",
		6: "sixty",
		7: "seventy",
		8: "eighty",
		9: "ninety"
	};


	  if (number === 0) {
        return value1[0];
    }

    if (number === 11) {
    	return "eleven";
    }
    

    if (0 < number && number < 11) {
    	return value1[number];
    }


    if (11 < number && number < 21) {
    	return value2[number];
    }


    if (19 < number && number < 30) {

	const arrnum = number.toString().split('').map(Number)
	return value3[arrnum[0]] + " " + value1[arrnum[1]];
    };

}
