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

const getQttDays = (yr, mth) => (isLeap(yr) && mth === 1) ? 29 : mths[mth]

const distFromStt = (yr, mth, dy) => {
	let qttDays = 0

	//years
	for(let i = stt.year; i < yr; i++)
		qttDays += isLeap(i) ? 366 : 365

	//months
	for(let i = stt.month; i < mth; i++)
		qttDays += getQttDays(yr, i-1)

	//days
	qttDays += dy - stt.day

	return qttDays
}

const getWDay = (yr, mth, dy) => {
	qttDays = distFromStt(yr, mth, dy)

	return (qttDays + 1) % 7
}

const countSundays = (sttYr, sttMth, endYr, endMth, cb) => {
	let count = 0;
	for(let y = sttYr; y <= endYr; y++)
		for(let m = sttMth; m <= endMth; m++)
			if(getWDay(y, m, 1) === 0) count++;
	return count;
}


console.log(countSundays(1901, 1, 2000, 12))
