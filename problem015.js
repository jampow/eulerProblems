/**
 * Problem 15
 * https://projecteuler.net/problem=15
 *
 * Starting in the top left corner of a 2x2 grid, and only being able to move 
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 * 
 * How many such routes are there through a 20x20 grid?
 */

const buildGrid = (w, h) => {
	return new Array(w).map(() => console.log(new Array(h)))
}

console.log(buildGrid(20, 20)[0])
console.log([...Array(20)])
