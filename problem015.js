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
	return [...Array(w)].map(i => [...Array(h)])
}

const prepareGrid = grid => {
	for(let i = 0; i < grid.length; i++)
	return grid.map((x, i) => {
		if(i === 0)
			return x.map(y => 1)
		else
			return x.map((y, j) => (j === 0) ? 1 : 0)
	})
}

console.log(prepareGrid(buildGrid(20, 20)))
