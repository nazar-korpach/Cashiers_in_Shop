import {Raw, FindOperator} from 'typeorm'

export const IsOdd = () => {
	return new FindOperator('raw', [], false, false, (number) => `${number} % 2 = 1`)
}