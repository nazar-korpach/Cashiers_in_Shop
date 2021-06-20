import {Raw, FindOperator} from 'typeorm'

export const isOdd = () => {
	return new FindOperator('raw', [], false, false, (number) => `${number} % 2 = 1`)
}