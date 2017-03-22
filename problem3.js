/**
 * Problem 3
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.  
 * What is the largest prime factor of the number 600851475143 ?
 */

const isPrime = num => {
	if(num % 2 === 0) return (n == 2)
	if(num % 3 === 0) return (n == 3)

	var s = Math.sqrt(num)

	for(var i = 5; i <= s; i += 6) {
		if(num % i       === 0) return false
		if(num % (i + 2) === 0) return false
	}

	return true
}

const isEven = num => num % 2 === 0

const lPrimeFactor = num => {
	var st = ((isEven(num)) ? num : num -1) / 2
	var i = (isEven(st)) ? st -1 : st

	for(; i > 3; i -= 2){
		//console.log(i);
		if(isPrime(i) && num % i === 0) return i 
	}
	
}

console.log(isPrime(8))
console.log(isPrime(29))

console.log(lPrimeFactor(600851475143))
