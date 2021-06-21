import {FindOperator} from 'typeorm'

export const Or = (...operators: FindOperator<any>[]) => {
	if(operators.length === 1) {
		return operators[0]
	}
	return new FindOperator('raw', [], false, false, (data) => {
		let sql = '(';
		operators.forEach( operator => {
			sql += operator.getSql(data)
			sql += ' OR '
		})
		sql = sql.slice(0, sql.length -3); // remove last OR condition
		sql += ')';
		return sql;
	})

}