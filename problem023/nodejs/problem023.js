const limit = 28123
const abundant = []

/**
 * number status tells if a number is perfect, deficient or abudant
 *
 * @param {number} n - positive integer
 * @return {number} -1 = deficient
 * 0 = perfect
 * 1 = abundant
 */
const getStatus = n => {
	const sum = getDivisors(n).reduce((a, b) => a + b)
	if(sum > n) return 1
	if(sum < n) return -1
	return 0
}


const getDivisors = n => {
	let divs = []
	for(let i = 0; i <= n / 2; i++) {
		if(n % i === 0) divs.push(i)
	}
	return divs
}

const getAbundants = limit => {
	let abund = []
	for(let i = 2; i < limit; i++) {
		if(getStatus(i) === 1) 
			abund.push(i)
	}
	return abund
}

let i = 24
console.log(getDivisors(i))
console.log(getStatus(i))
console.log(getAbundants(limit))
