var strM = require('./strMath.js')

it('1 * 2 = 2', () => {
	expect(strM.mult('1', '2')).toBe('2')
})

it('13 * 12 = 156', () => {
	expect(strM.mult('13', '12')).toBe('156')
})

it('2184 * 11 = 24024', () => {
	expect(strM.mult('2184', '11')).toBe('24024')
})
