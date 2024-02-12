const factorial = (n: number): number => {
	if (n <= 1) {
		return 1;
	}
	else{
		return n * factorial(n - 1);
	}
};

const result = factorial(5);
console.log(result);


// 学習のためブラッシュアップ
// 1:出力結果は関数と分離すべきとのこと
// 2:再帰関数のそこは明確に提示しておくべきとのこと