/**
 * Problem 3
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.  
 * What is the largest prime factor of the number 600851475143 ?
 */

const lPrimeFactor = num => {
	let i = 2
	while(i <= num) (num % i === 0) ? num /= i : i++
	return i
}

console.log(lPrimeFactor(600851475143))
