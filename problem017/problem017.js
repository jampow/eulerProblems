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

var writeNumber = require('./numberToWord.js')

const countLetters = text => text.match(/[^\s-]/g).length

const sumLettersInterval = (start, finish) => {
	let result = 0

	for(let i = start; i <= finish; i++)
		result += countLetters(writeNumber(i))

	return result
}

console.log(sumLettersInterval(1,1000))
