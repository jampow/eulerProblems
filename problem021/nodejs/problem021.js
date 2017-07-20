const getDivisors = n => {
	let limit = n % 2 === 0 ? n / 2 : (--n) / 2
	let divs = [1]
	for(var i = 2; i <= limit; i++)
		if(n % i === 0) divs.push(i)
	return divs
}

const sum = (x, y) => x + y

const isAmicable = n => {
	let s = getDivisors(n).reduce(sum, 0)
	return n === getDivisors(s).reduce(sum, 0) && n !== s
}

const findAmicablesUnder = n => {
	let aNumbers = []
	for(let i = 2; i <= n; i++)
		if(isAmicable(i)) aNumbers.push(i)
	return aNumbers
}

console.log(findAmicablesUnder(10000).reduce(sum,0))

module.exports = {
	getDivisors: getDivisors,
	isAmicable: isAmicable,
	findAmicablesUnder: findAmicablesUnder
}
