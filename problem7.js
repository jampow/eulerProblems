/**
 * Problem 7
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see 
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

const isPrime = num => {
	if(num === 2)
		return true
	else if(num % 2 === 0)
		return false

	let lim = Math.sqrt(num)
	for(let i = 3; i <= lim; i += 2)
		if(num % i === 0) return false

	return true
}

const findPrime = num => {
	if(num === 1) return 2

	let c = 3

	for(let i = 2; i < num; c += 2)
		if(isPrime(c)) i++

	return c
}

console.log(isPrime(9))

console.log(findPrime(2))
console.log(findPrime(3))
console.log(findPrime(4))
console.log(findPrime(5))
console.log(findPrime(6))
console.log(findPrime(10001))

