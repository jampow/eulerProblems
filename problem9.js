/**
 * Problem 9
 * https://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for 
 * which,
 *
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

const sqr = n => Math.pow(n, 2)

const pit = (c1, c2) => Math.sqrt(sqr(c1) + sqr(c2))

const tripletPith = lim => {
	for(let a = 1;a < lim; a++) {
		for(let b = 1; b < lim; b++) {
			let c = pit(a, b)
			if(a + b + c === lim)
				// return { a: a, b: b, c: c }
				return a * b * c
		}
	} 

	return false
}

console.log(tripletPith(1000))
