var writeNumber = require('./problem017.js')

it('write number 5', () => {
	expect(writeNumber(5)).toBe('five')
})

it('write number 10', () => {
	expect(writeNumber(10)).toBe('ten')
})

it('write number 15', () => {
	expect(writeNumber(15)).toBe('fifteen')
})

it('write number 30', () => {
	expect(writeNumber(30)).toBe('thirty')
})

it('write number 46', () => {
	expect(writeNumber(46)).toBe('fourty-six')
})

it('write number 115', () => {
	expect(writeNumber(115)).toBe('one hundred and fifteen')
})

it('write number 290', () => {
	expect(writeNumber(290)).toBe('two hundred and ninety')
})

it('write number 342', () => {
	expect(writeNumber(342)).toBe('three hundred and fourty-two')
})

it('write number 600', () => {
	expect(writeNumber(600)).toBe('six hundred')
})

it('write number 704', () => {
	expect(writeNumber(704)).toBe('seven hundred and four')
})

it('write number 1007', () => {
	expect(writeNumber(1007)).toBe('one thousand and seven')
})

it('write number 1042', () => {
	expect(writeNumber(1042)).toBe('one thousand and fourty-two')
})

it('write number 1070', () => {
	expect(writeNumber(1070)).toBe('one thousand and seventy')
})

it('write number 1380', () => {
	expect(writeNumber(1380)).toBe('one thousand three hundred and eighty')
})

it('write number 1500', () => {
	expect(writeNumber(1500)).toBe('one thousand five hundred')
})
