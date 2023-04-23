const view = document.querySelector("#result");

const beautifulDays = (i, j, k) => {
	let array = [];
	let ourArray = [];
	let result = 0;
	for (let a = i; a <= j; a++) {
		array.push(a);
	}

	for (let a = 0; a < array.length; a++) {
		let b = array[a].toString();
		b = b.split("");
		b = b.reverse();
		b = b.join("");
		b = Number.parseInt(b);

		let value = array[a];
		let opposite = b;
		let difference = Math.abs(value - opposite);
		let result = difference / k;
		ourArray.push(result);
	}

	for (let a = 0; a < ourArray.length; a += 1) {
		if (Number.isInteger(ourArray[a])) {
			result += 1;
		}
	}

	return result;
};

view.textContent = `Result = ${beautifulDays(20, 24, 6)}`;
