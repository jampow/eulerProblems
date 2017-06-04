/**
 * Problem 17
 * https://projecteuler.net/problem=17
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
 * letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 */

const numbers = {
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine',
	'10': 'ten',
	'11': 'eleven',
	'12': 'twelve',
	'13': 'thirteen',
	'14': 'fourteen',
	'15': 'fifteen',
	'16': 'sixteen',
	'17': 'seventeen',
	'18': 'eighteen',
	'19': 'nineteen',
	'20': 'twenty',
	'30': 'thirty',
	'40': 'fourty',
	'50': 'fivety',
	'60': 'sixty',
	'70': 'seventy',
	'80': 'eighty',
	'90': 'ninety',
	'100': 'hundred',
	'1000': 'thousand'
};

const writeNumber = number => {
	let strNum = number.toString()
	let arrNum = strNum.split('')

	let result = ''

	if(arrNum.length == 4){
		result += `${numbers[arrNum.shift()]} `
		result += `${numbers['1000']} `
	}

	if(arrNum.length == 3){
		let n = arrNum.shift()

		if(n !== '0') {
			result += `${numbers[n]} `
			result += `${numbers['100']} `
		}

		if(arrNum.join('') === '00') return result.trim()
	}

	if(arrNum.length == 2){
		if(result.length > 0) result += 'and '

		let dec = (+arrNum.join('') < 20)
			? +arrNum.join('').toString()
			: arrNum.shift()

		if(arrNum[arrNum.length - 1] === '0')
			return result + numbers[arrNum.join('')]
		else
			result += `${numbers[dec]} `
	}

	if(arrNum.length == 1){
		if(result.length > 0) result = result.replace(/\s$/, '-')
		result += `${numbers[arrNum.shift()]} `
	}

	return result.trim()
}

module.exports = writeNumber
