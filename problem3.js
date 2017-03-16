/**
 * Problem 3
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.  
 * What is the largest prime factor of the number 600851475143 ?
 */

const isPrime = num => {
	return [...Array(num).keys()]
		.slice(2)
		.filter(i => num % i === 0)
		.length === 0
}

console.log(isPrime(8))
console.log(isPrime(13))
