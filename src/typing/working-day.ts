import {Days} from './days';

export interface WorkingDay {
	day: Days
	kassaNumber: number
	startTime: string // time in HH:MM format
	endTime: string
}
export interface FreeDay extends WorkingDay {
	day: Days
	kassaNumber: -1
	startTime: '25:00',
	endTime: '25:00'
}