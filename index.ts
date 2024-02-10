// 入力値
const n: number = 3;

const factorial = (n: number) => {
	let result: number = 1;
	for (let i = 0; i < n; i++) {
		result *= i + 1;
	}
	console.log(result);
};

factorial(3);