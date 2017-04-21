/**
 * Problem 10
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

const isPrime = num => {
	if(num === 2) return true

	if(num % 2 === 0) return false

	let lim = Math.sqrt(num)

	for(let i = 3; i <= lim; i += 2)
		if(num % i === 0) return false

	return true
}

const sumPrimes = lim => {
	let primes = [2];

	for(let i = 3; i < lim; i += 2)
		if(isPrime(i)) primes.push(i)

	return primes.reduce((prev, curr) => prev + curr)
}


console.log(sumPrimes(2e6))
