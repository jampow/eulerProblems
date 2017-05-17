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
	let partMult = []

	ya.forEach((y, i) => {
		let dec = 0
		partMult.push(new Array(i).fill(0))
		xa.forEach((x) => {
			let m = x * y + dec
			m = m.toString().split('')
			partMult[i].push(m.pop())
			dec = m.join('') * 1
		})
		partMult[i].push(dec)
	})
	return partMult
}

const sumArr = arr => {
	let max = Math.max.apply(null, arr.map(a => a.length))
	return max
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

//console.log(sumDigits(Math.pow(2, 1000)))
console.log(sumArr(longMult('63', '622')))
