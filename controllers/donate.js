const pool = require('../utils/config')
const paystackPublicKey = process.env.PAYSTACK_PUBLIC_KEY_TEST
const secretKey = process.env.PAYSTACK_SECRET

module.exports.savePayment = function savePayment (req, res) {
	const { email, amount, message, reference, status, transaction } = req.body

	const sql = `
		INSERT INTO donations 
		(
			email,
			amount, 
			message,
			reference,
			status,
			transaction
		)
		VALUES(
			'${email}',
			'${amount}',
			'${message}',
			'${reference}',
			'${status}',
			'${transaction}'
		)
	`
	pool.query(sql, (err, doc) => {
		if (err) {
			console.log(err)
			return res.status(500).json({error: true, msg: 'an error occured'})
		}
		console.log(doc)

		res.status(200).json({status: true})
	})

}

module.exports.paystackHook = function paystackHook(req, res) {
	const event = req.body
	console.log(event)
	
}

module.exports.handlePayment = function handlePayment(req, res) {
	const { email, amount } = req.body
	
	fetch('https://api.paystack.co/transaction/initialize', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${secretKey}`,
			'Cache-Control': 'no-cache'
		},
		body: JSON.stringify({email, amount})
	})
	.then(_res => _res.json())
	.then(({data}) => {
		res.status(201).json(data)
	})
	.catch(err => {})
}