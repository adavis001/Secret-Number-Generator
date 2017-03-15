"use strict";
module.exports = (function secretNumberGenerator() {
	var number = Math.floor((Math.random() * 1000000));

	function secretNumber(){
		return number;
	};

	return secretNumber;
});
