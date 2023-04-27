const pool = require('../utils/config')
const dbErrors = require('../utils/dbErrors')
const {v4: uuid} = require('uuid')

module.exports.register = function (req, res) {
	let { name, tel, email, lga, ward, department } = req.body
	const date = new Date()
	
	tel = tel.replaceAll(' ', '')

	const sql = `INSERT INTO users
		(
			name,
			email,
			tel,
			lga,
			ward,
			department,
			id,
			created_at
		) 
		VALUES(
			'${name}',
			'${email}',
			'${tel}',
			'${lga}',
			'${ward}',
			'${department}',
			'${uuid({msecs: date.getTime()})}',
			'${date}'

		)
	`

	if (email !== '') {
		pool.query('SELECT email FROM users WHERE email = ?', [email], async (err, doc) => {
			if (err) console.log(err)

			if (doc.length) {

				return res.status(400).json({
					email: 'This email has been registered'
				})

			} else {

				pool.query(sql, (_err, doc) => {
					if (_err) {
						let errObj = dbErrors(_err)
						return res.status(400).send({...errObj})
					}
					res.status(200).json({success: true})
				})

			}
		})
	}

	
}