import {Days} from '@srv/typing';

enum daysToIndexTable {
	'Monday' = 0,
	'Tuesday' = 1,
	'Wednesday'= 2,
	'Thursday'= 3,
	'Friday'= 4,
	'Saturday'= 5,
	'Sunday' = 6,
}

export const dayToIndex = (day: Days) => {
	return daysToIndexTable[day];
};