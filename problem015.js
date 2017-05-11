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

const countPaths = (w, h) => {
	let grid = prepareGrid(buildGrid(w + 1, h + 1))
	for(let i = 1; i <= w; i++){
		for(let j = 1; j <= h; j++){
			grid[i][j] = grid[i-1][j] + grid[i][j-1]
		}
	}
	return grid[w][h]
}

console.log(countPaths(20, 20))
