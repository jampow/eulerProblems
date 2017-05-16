/**
 * Problem 16
 * https://projecteuler.net/problem=16
 * 
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */

const sumDigits = num => num.toString()
	.split('')
	.reduce((prev, curr) => +prev + +curr)

const longMult = (_x, _y) => {
	let xa = _x.split('').reverse()
	let ya = _y.split('').reverse()

	ya.forEach(function(y){
		
	})
}

const longPow = (base, exp) => {
	prod = base.toString()
	let i = 1

	while(i < exp){
		prod = longMult(prod, exp)
		i++
	}
	return prod
}

console.log(sumDigits(Math.pow(2, 1000)))
