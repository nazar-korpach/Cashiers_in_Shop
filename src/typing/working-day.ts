import { Days } from './days'

export interface WorkingDay {
	day: Days
	startTime: string // time in HH:MM format
	endTime: string
}
export interface FreeDay extends WorkingDay {
	day: Days
	startTime: '25:00',
	endTime: '25:00'
}