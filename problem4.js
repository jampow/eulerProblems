
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
	let pals = [];

	let st = Math.pow(10, dig) - 1
	const lim = Math.pow(10, dig - 1)

	for(let i = st;i >= lim; i--) {
		for(let j = st;j >= lim; j--) {
			let prod = i * j
			if(isPalindrome(prod))
				pals.push(prod)
		}
	}

	return Math.max.apply(null, pals)
}

const isPalindrome = num => num === num.toString().split('').reverse().join('') * 1

console.log(lPalindrome(3))
