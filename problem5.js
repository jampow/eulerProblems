const isDiv = (num, lim) => [...Array(lim).keys()]
	.filter(i => num % (i + 1) === 0)
	.length === lim

const smDiv = lim => {
	let num = lim
	while(!isDiv(num,lim))
		num += lim
	return num
}
		

console.log(smDiv(20))
//console.log(isDiv(2520, 10))
