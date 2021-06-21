import {Raw, FindOperator} from 'typeorm'

export const ArrContains = (el: string) => {
	return new FindOperator('raw', [], false, false, (arr) => ` ${arr} @> '{${el}}'`)
}