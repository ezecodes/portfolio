const { register } = require('../../controllers/user')

export default function userApi(req, res) {
	const { method } = req
	if (method === 'POST') register(req, res)
}