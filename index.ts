const factorial = (n: number, result: number = 1): number => {
	if (n > 1) {
		result *= n;
		n--;
		factorial(n,result);
	}
	else{
		console.log(`結果:${result}`);
	}
	return result;
};
factorial(5);