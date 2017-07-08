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
	'40': 'forty',
	'50': 'fifty',
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

		let dec = (+arrNum.join('') < 20 || arrNum[1] === '0')
			? Number.parseInt(arrNum.join('')).toString()
			: arrNum.shift() + '0'

		if(arrNum[1] === '0')
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
