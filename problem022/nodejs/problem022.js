const fs = require('fs');

const file = fs.readFileSync(__dirname + '/../names.txt')

const names = eval('[' + file.toString() + ']').sort()

const letterPts = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const getLetterPts = letter => letterPts.indexOf(letter)

const sumLetters = (_a, _b) => {
	let a, b
	if(typeof _a === 'string')
		a = getLetterPts(_a)
	b = getLetterPts(_b)
	return (a || _a) +b
}

const getNamePts = name => name.split('')
	.reduce(sumLetters)

console.log(names[937]);
console.log(getNamePts(names[937]));
