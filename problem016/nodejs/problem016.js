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
	return sumArr(partMult)
}

const sumArr = arr => {
	let _x = arr.length
	let _y = Math.max.apply(null, arr.map(a => a.length))
	let prod = []

	for(let y = 0; y < _y; y++) {
		let sum = arr
			.map(i => i[y] ? i[y] : 0)
			.reduce((pre, cur) => +pre + +cur)
			.toString()
		prod.push(sum)
	}

	let dec = 0

	prod = prod.map(n => {
		let ret
		let num
		let ldec = dec
		dec = 0

		num = n.split('')
		ret = num.pop()

		if(n.length >= 2) {
			dec = num.join('')
		}

		return +ret + +ldec
	})

	return clearLeftZeros(prod.reverse().join(''))
}

const clearLeftZeros = str => str.replace(/^0*/, '')

const longPow = (base, exp) => {
	prod = base.toString()
	expStr = base.toString()
	let i = 1

	while(i < exp){
		prod = longMult(prod, expStr)
		i++
	}
	return prod
}

console.log(sumDigits(longPow(2, 1000)))
