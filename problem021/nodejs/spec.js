var p21 = require('./problem021.js')

it('has the divisors of 10', () => {
	expect(p21.getDivisors(10)).toEqual(expect.arrayContaining([2, 5]))
}) 

it('has the divisors of 220', () => {
	var divs = [2, 4, 5, 10, 11, 20, 22, 44, 55, 110]
	expect(p21.getDivisors(220)).toEqual(expect.arrayContaining(divs))
})

it('has the divisors of 284', () => {
	var divs = [2, 4, 71, 142]
	expect(p21.getDivisors(284)).toEqual(expect.arrayContaining(divs))
})
