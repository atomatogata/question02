// 入力値
const n = 3;

const factorial = (n: number): number => {
	let result: number = 1;
	for (let i = 0; i < n; i++) {
		result *= i + 1;
	}
	return result;
};

const answer: number = factorial(3);
console.log(answer);