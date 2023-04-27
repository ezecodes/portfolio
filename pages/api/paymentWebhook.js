const { paystackHook } = require('../../controllers/donate')

module.exports = function paymentWebhook(req, res) {
	if (req.method === 'POST') paystackHook(req, res)
}