const strMath = require('../util/strMath.js');

const factorial = (n, acc) => {
	if(!acc) acc = '1'
	if(n === '1')
		console.log(n, acc, '\n')
	if(n === '1')
		return acc
	else
		return factorial((+n - 1).toString() , strMath.mult(acc, n))
}

const sumDigits = n => n.split('').reduce((x,y) => +x + +y, 0)

console.log(sumDigits(factorial('100')))

