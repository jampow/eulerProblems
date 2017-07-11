const getDivisors = n => {
	let limit = n % 2 === 0 ? n / 2 : (--n) / 2
	let divs = [1]
	for(var i = 2; i <= limit; i++)
		if(n % i === 0) divs.push(i)
	return divs
}

module.exports = {
	getDivisors: getDivisors
}
