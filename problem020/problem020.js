const factorial = (n, acc) => {
	if(!acc) acc = 1
	if(n === 1)
		return acc
	else
		return factorial(n - 1, acc * n)
}

const sumDigits = n => n.toString()
	.split('')
	.reduce((x,y) => +x + +y, 0)

console.log(sumDigits(factorial(100)))
