
/**
 * Problem 4
 * https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways. The largest palindrome made 
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const lPalindrome = dig => {
	let st = Math.pow(10, dig) - 1, a = st, b = st
	const lim = Math.pow(10, dig - 1)

	while(a >= lim && b >= lim) {
		let res,
		mul = a * b,
		pal = mul.toString().split('').reverse().join('') * 1
		console.log(a,b, mul, pal);

		if(mul === pal) 
			res = mul 
		else
			if(a === lim) {
				b--
				a = st
			} else
				a--

		if(res) return res
	}
}

console.log(lPalindrome(3))
