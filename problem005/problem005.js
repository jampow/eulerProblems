/**
 * Problem 5
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

const isDiv = (num, lim) => {
	let half = lim / 2
	for(let i = lim; i > half; i--) if(num % i > 0) return false
	return true
}

const smDiv = lim => {
	let num = lim
	while(!isDiv(num,lim))
		num += lim
	return num
}
		
console.log(smDiv(20))
