/**
 * Problem 1
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const magicSum = num => [...Array(num).keys()].filter(mul35).reduce(sum, 0)

const mul35 = num => num % 3 === 0 || num % 5 === 0

const sum = (tt, num) => tt + num

console.log(magicSum(10))
console.log(magicSum(100))
console.log(magicSum(1000))
console.log(magicSum(10000))
console.log(magicSum(100000))
console.log(magicSum(1000000))
