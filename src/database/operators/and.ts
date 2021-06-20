import {FindOperator} from 'typeorm'

export const And = (...operators: FindOperator<any>[]) => {
	if(operators.length === 1) {
		return operators[0]
	}
	return new FindOperator('raw', [], false, false, (data) => {
		let sql = '';
		operators.forEach( operator => {
			sql += operator.getSql(data)
			sql += ' AND '
		})
		return sql.slice(0, sql.length -4); // remove last AND condition
	})

}