const isLeap = yr => {
	if(yr % 4 === 0) {
		if(yr % 100 === 0) {
			if(yr % 400 === 0) 
				return true 
			else
				return false
		} else
			return true	
	} else
		return false
}

const mths = [
	31, //jan
	28, //feb
	31, //mar
	30, //apr
	31, //may
	30, //jun
	31, //jul
	31, //aug
	30, //sep
	31, //oct
	30, //nov
	31  //dec
]

const wdays = [
	'sun',
	'mon',
	'tue',
	'wed',
	'thu',
	'fri',
	'sat'
]

const stt = {day:1, month:1, year:1900, wday:1}

const qttDays = (yr, mth) => (isLeap(yr) && mth === 1) ? 29 : mths[mth]

const distFromStt = (yr, mth, dy) => {
	let qttDays = 0

	//years
	for(let i = stt.year; i < yr; i++)
		qttDays += isLeap(i) ? 366 : 365

	//months

	return qttDays
}

const getWDay = (yr, mth, dy) => {
	qttDays = distFromStt(yr, mth, dy)

	let wday = qttDays % 7
	return (wday === 6) ? 0 : wday + 1
}

console.log(1906, isLeap(1906), getWDay(1906, 1, 1), 1)
console.log(2001, isLeap(2001), getWDay(2001, 1, 1), 1)
console.log(2002, isLeap(2002), getWDay(2002, 1, 1), 2)
console.log(2003, isLeap(2003), getWDay(2003, 1, 1), 3)
console.log(2004, isLeap(2004), getWDay(2004, 1, 1), 4)
console.log(2005, isLeap(2005), getWDay(2005, 1, 1), 6)
console.log(2006, isLeap(2006), getWDay(2006, 1, 1), 0)
console.log(2007, isLeap(2007), getWDay(2007, 1, 1), 1)
console.log(2008, isLeap(2008), getWDay(2008, 1, 1), 2)

