/**
 * Problem 6
 * https://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is,
 * 
 * 12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)2 = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred 
 * natural numbers and the square of the sum.
 */

const sumOfSquares = num =>
	[...Array(num + 1).keys()]
		.map(i => i*i)
		.reduce(((prev, curr) => prev + curr), 0)

const squareOfSum = num =>
	Math.pow([...Array(num + 1).keys()]
		.reduce(((prev, curr) => prev + curr), 0), 2)

const diff = lim => squareOfSum(lim) - sumOfSquares(lim)

console.log(diff(100))
