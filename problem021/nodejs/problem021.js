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
	return n === getDivisors(s).reduce(sum, 0)
}

module.exports = {
	getDivisors: getDivisors
}
